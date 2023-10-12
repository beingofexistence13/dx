/* eslint-disable no-underscore-dangle */
import { dedent } from 'ts-dedent';
import Vue from 'vue';
import type { RenderContext, ArgsStoryFn } from '@storybook/types';
import type { CombinedVueInstance } from 'vue/types/vue';
import type { VueRenderer } from './types';

export const COMPONENT = 'STORYBOOK_COMPONENT';
export const VALUES = 'STORYBOOK_VALUES';

const map = new Map<VueRenderer['canvasElement'], Instance>();
type Instance = CombinedVueInstance<
  Vue,
  {
    STORYBOOK_COMPONENT: any;
    STORYBOOK_VALUES: Record<string, unknown>;
  },
  object,
  object,
  Record<never, any>
>;

const getRoot = (canvasElement: VueRenderer['canvasElement']): Instance => {
  const cachedInstance = map.get(canvasElement);
  if (cachedInstance != null) return cachedInstance;

  // Create a dummy "target" underneath #storybook-root
  // that Vue2 will replace on first render with #storybook-vue-root
  const target = document.createElement('div');
  canvasElement.appendChild(target);

  const instance: Instance = new Vue({
    beforeDestroy() {
      map.delete(canvasElement);
    },
    data() {
      return {
        [COMPONENT]: undefined,
        [VALUES]: {},
      };
    },
    // @ts-expect-error What's going on here? (TS says that we should not return an array here, but the `h` directly)
    render(h) {
      map.set(canvasElement, instance);
      return this[COMPONENT] ? [h(this[COMPONENT])] : undefined;
    },
  });

  return instance;
};

export const render: ArgsStoryFn<VueRenderer> = (args, context) => {
  const { id, component: Component, argTypes } = context;
  const component = Component as VueRenderer['component'] & {
    __docgenInfo?: { displayName: string };
    props: Record<string, any>;
  };

  if (!component) {
    throw new Error(
      `Unable to render story ${id} as the component annotation is missing from the default export`
    );
  }

  let componentName = 'component';

  // if there is a name property, we either use it or preprend with sb- in case it's an invalid name
  if (component.name) {
    // @ts-expect-error isReservedTag is an internal function from Vue, might be changed in future releases
    const isReservedTag = Vue.config.isReservedTag && Vue.config.isReservedTag(component.name);

    componentName = isReservedTag ? `sb-${component.name}` : component.name;
  } else if (component.__docgenInfo?.displayName) {
    // otherwise, we use the displayName from docgen, if present
    componentName = component.__docgenInfo?.displayName;
  }

  let eventsBinding = '';
  const eventProps = Object.values(argTypes)
    .filter((argType) => argType?.table?.category === 'events')
    .map((argType) => argType.name);

  const camelCase = (str: string) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  if (eventProps.length) {
    eventsBinding = eventProps.map((name) => `@${name}="$props['${camelCase(name)}']"`).join(' ');
  }

  return {
    props: Object.keys(argTypes),
    components: { [componentName]: component },
    template: `<${componentName} ${eventsBinding} v-bind="filterOutEventProps($props)" />`,
    methods: {
      filterOutEventProps(props: object) {
        return Object.fromEntries(
          Object.entries(props).filter(([key]) => !eventProps.includes(key))
        );
      },
    },
  };
};

export function renderToCanvas(
  {
    title,
    name,
    storyFn,
    showMain,
    showError,
    showException,
    forceRemount,
  }: RenderContext<VueRenderer>,
  canvasElement: VueRenderer['canvasElement']
) {
  const root = getRoot(canvasElement);
  Vue.config.errorHandler = showException;
  const element = storyFn();

  let mountTarget: Element | VueRenderer['canvasElement'] | null;

  // Vue2 mount always replaces the mount target with Vue-generated DOM.
  // https://v2.vuejs.org/v2/api/#el:~:text=replaced%20with%20Vue%2Dgenerated%20DOM
  // We cannot mount to the canvasElement directly, because it would be replaced. That would
  // break the references to the canvasElement like canvasElement used in the play function.
  // Instead, we mount to a child element of the canvasElement, creating one if necessary.
  if (canvasElement.hasChildNodes()) {
    mountTarget = canvasElement.firstElementChild;
  } else {
    mountTarget = document.createElement('div');
    canvasElement.appendChild(mountTarget);
  }

  if (!element) {
    showError({
      title: `Expecting a Vue component from the story: "${name}" of "${title}".`,
      description: dedent`
        Did you forget to return the Vue component from the story?
        Use "() => ({ template: '<my-comp></my-comp>' })" or "() => ({ components: MyComp, template: '<my-comp></my-comp>' })" when defining the story.
      `,
    });
    return;
  }

  // at component creation || refresh by HMR or switching stories
  if (!root[COMPONENT] || forceRemount) {
    root[COMPONENT] = element;
  }

  // @ts-expect-error https://github.com/storybookjs/storrybook/pull/7578#discussion_r307986139
  root[VALUES] = { ...element.options[VALUES] };

  if (!map.has(canvasElement)) {
    root.$mount(mountTarget ?? undefined);
  }

  showMain();
}
