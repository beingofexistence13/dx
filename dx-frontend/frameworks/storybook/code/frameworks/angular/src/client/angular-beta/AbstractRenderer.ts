import { ApplicationRef, enableProdMode, NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { BehaviorSubject, Subject } from 'rxjs';
import { stringify } from 'telejson';
import { ICollection, Parameters, StoryFnAngularReturnType } from '../types';
import { getApplication } from './StorybookModule';
import { storyPropsProvider } from './StorybookProvider';
import { componentNgModules } from './StorybookWrapperComponent';
import { PropertyExtractor } from './utils/PropertyExtractor';

type StoryRenderInfo = {
  storyFnAngular: StoryFnAngularReturnType;
  moduleMetadataSnapshot: string;
};

const applicationRefs = new Map<HTMLElement, ApplicationRef>();

export abstract class AbstractRenderer {
  /**
   * Wait and destroy the platform
   */
  public static resetApplications(domNode?: HTMLElement) {
    componentNgModules.clear();
    applicationRefs.forEach((appRef, appDOMNode) => {
      if (!appRef.destroyed && (!domNode || appDOMNode === domNode)) {
        appRef.destroy();
      }
    });
  }

  /**
   * Reset compiled components because we often want to compile the same component with
   * more than one NgModule.
   */
  protected static resetCompiledComponents = async () => {
    try {
      // Clear global Angular component cache in order to be able to re-render the same component across multiple stories
      //
      // References:
      // https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_angular/src/webpack/plugins/hmr/hmr-accept.ts#L50
      // https://github.com/angular/angular/blob/2ebe2bcb2fe19bf672316b05f15241fd7fd40803/packages/core/src/render3/jit/module.ts#L377-L384
      const { ɵresetCompiledComponents } = await import('@angular/core');
      ɵresetCompiledComponents();
    } catch (e) {
      /**
       * noop catch
       * This means angular removed or modified ɵresetCompiledComponents
       */
    }
  };

  protected previousStoryRenderInfo = new Map<HTMLElement, StoryRenderInfo>();

  // Observable to change the properties dynamically without reloading angular module&component
  protected storyProps$: Subject<ICollection | undefined>;

  constructor() {
    if (typeof NODE_ENV === 'string' && NODE_ENV !== 'development') {
      try {
        // platform should be set after enableProdMode()
        enableProdMode();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.debug(e);
      }
    }
  }

  protected abstract beforeFullRender(domNode?: HTMLElement): Promise<void>;

  protected abstract afterFullRender(): Promise<void>;

  /**
   * Bootstrap main angular module with main component or send only new `props` with storyProps$
   *
   * @param storyFnAngular {StoryFnAngularReturnType}
   * @param forced {boolean} If :
   * - true render will only use the StoryFn `props' in storyProps observable that will update sotry's component/template properties. Improves performance without reloading the whole module&component if props changes
   * - false fully recharges or initializes angular module & component
   * @param component {Component}
   */
  public async render({
    storyFnAngular,
    forced,
    component,
    targetDOMNode,
  }: {
    storyFnAngular: StoryFnAngularReturnType;
    forced: boolean;
    component?: any;
    targetDOMNode: HTMLElement;
  }) {
    const targetSelector = this.generateTargetSelectorFromStoryId(targetDOMNode.id);

    const newStoryProps$ = new BehaviorSubject<ICollection>(storyFnAngular.props);

    if (
      !this.fullRendererRequired({
        targetDOMNode,
        storyFnAngular,
        moduleMetadata: {
          ...storyFnAngular.moduleMetadata,
        },
        forced,
      })
    ) {
      this.storyProps$.next(storyFnAngular.props);

      return;
    }

    await this.beforeFullRender(targetDOMNode);

    // Complete last BehaviorSubject and set a new one for the current module
    if (this.storyProps$) {
      this.storyProps$.complete();
    }
    this.storyProps$ = newStoryProps$;

    this.initAngularRootElement(targetDOMNode, targetSelector);

    const analyzedMetadata = new PropertyExtractor(storyFnAngular.moduleMetadata, component);

    const application = getApplication({
      storyFnAngular,
      component,
      targetSelector,
      analyzedMetadata,
    });

    const applicationRef = await bootstrapApplication(application, {
      ...storyFnAngular.applicationConfig,
      providers: [
        storyPropsProvider(newStoryProps$),
        ...analyzedMetadata.applicationProviders,
        ...(storyFnAngular.applicationConfig?.providers ?? []),
      ],
    });

    applicationRefs.set(targetDOMNode, applicationRef);

    await this.afterFullRender();
  }

  /**
   * Only ASCII alphanumerics can be used as HTML tag name.
   * https://html.spec.whatwg.org/#elements-2
   *
   * Therefore, stories break when non-ASCII alphanumerics are included in target selector.
   * https://github.com/storybookjs/storybook/issues/15147
   *
   * This method returns storyId when it doesn't contain any non-ASCII alphanumerics.
   * Otherwise, it generates a valid HTML tag name from storyId by removing non-ASCII alphanumerics from storyId, prefixing "sb-", and suffixing "-component"
   * @protected
   * @memberof AbstractRenderer
   */
  protected generateTargetSelectorFromStoryId(id: string) {
    const invalidHtmlTag = /[^A-Za-z0-9-]/g;
    const storyIdIsInvalidHtmlTagName = invalidHtmlTag.test(id);
    return storyIdIsInvalidHtmlTagName ? `sb-${id.replace(invalidHtmlTag, '')}-component` : id;
  }

  protected initAngularRootElement(targetDOMNode: HTMLElement, targetSelector: string) {
    // Adds DOM element that angular will use as bootstrap component
    // eslint-disable-next-line no-param-reassign
    targetDOMNode.innerHTML = '';
    targetDOMNode.appendChild(document.createElement(targetSelector));
  }

  private fullRendererRequired({
    targetDOMNode,
    storyFnAngular,
    moduleMetadata,
    forced,
  }: {
    targetDOMNode: HTMLElement;
    storyFnAngular: StoryFnAngularReturnType;
    moduleMetadata: NgModule;
    forced: boolean;
  }) {
    const previousStoryRenderInfo = this.previousStoryRenderInfo.get(targetDOMNode);

    const currentStoryRender = {
      storyFnAngular,
      moduleMetadataSnapshot: stringify(moduleMetadata),
    };

    this.previousStoryRenderInfo.set(targetDOMNode, currentStoryRender);

    if (
      // check `forceRender` of story RenderContext
      !forced ||
      // if it's the first rendering and storyProps$ is not init
      !this.storyProps$
    ) {
      return true;
    }

    // force the rendering if the template has changed
    const hasChangedTemplate =
      !!storyFnAngular?.template &&
      previousStoryRenderInfo?.storyFnAngular?.template !== storyFnAngular.template;
    if (hasChangedTemplate) {
      return true;
    }

    // force the rendering if the metadata structure has changed
    const hasChangedModuleMetadata =
      currentStoryRender.moduleMetadataSnapshot !== previousStoryRenderInfo?.moduleMetadataSnapshot;

    return hasChangedModuleMetadata;
  }
}
