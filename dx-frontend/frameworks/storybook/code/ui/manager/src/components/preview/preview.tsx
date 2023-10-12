import type { FC } from 'react';
import React, { Fragment, useMemo, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { global } from '@storybook/global';

import { type API, Consumer, type Combo, merge, addons, types } from '@storybook/manager-api';
import type { Addon_BaseType } from '@storybook/types';
import { PREVIEW_BUILDER_PROGRESS, SET_CURRENT_STORY } from '@storybook/core-events';

import { Loader } from '@storybook/components';
import { Location } from '@storybook/router';

import * as S from './utils/components';
import { ZoomProvider, ZoomConsumer } from './tools/zoom';
import { defaultWrappers, ApplyWrappers } from './wrappers';
import { ToolbarComp } from './toolbar';
import { FramesRenderer } from './FramesRenderer';

import type { PreviewProps } from './utils/types';

const { FEATURES } = global;

const getWrappers = (getFn: API['getElements']) => Object.values(getFn(types.PREVIEW));
const getTabs = (getFn: API['getElements']) => Object.values(getFn(types.TAB));

const canvasMapper = ({ state, api }: Combo) => ({
  storyId: state.storyId,
  refId: state.refId,
  viewMode: state.viewMode,
  customCanvas: api.renderPreview,
  queryParams: state.customQueryParams,
  getElements: api.getElements,
  entry: api.getData(state.storyId, state.refId),
  previewInitialized: state.previewInitialized,
  refs: state.refs,
  active: !!(state.viewMode && state.viewMode.match(/^(story|docs)$/)),
});

const createCanvasTab = (): Addon_BaseType => ({
  id: 'canvas',
  type: types.TAB,
  title: 'Canvas',
  route: ({ storyId, refId }) => (refId ? `/story/${refId}_${storyId}` : `/story/${storyId}`),
  match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
  render: () => null,
});

const useTabs = (getElements: API['getElements'], entry: PreviewProps['entry']) => {
  const canvasTab = useMemo(() => createCanvasTab(), []);
  const tabsFromConfig = useMemo(() => getTabs(getElements), [getElements]);

  return useMemo(() => {
    if (entry?.type === 'story' && entry.parameters) {
      return filterTabs([canvasTab, ...tabsFromConfig], entry.parameters);
    }

    return [canvasTab, ...tabsFromConfig];
  }, [entry, ...tabsFromConfig]);
};

const Preview = React.memo<PreviewProps>(function Preview(props) {
  const {
    api,
    id: previewId,
    options,
    viewMode,
    storyId,
    entry = undefined,
    description,
    baseUrl,
    withLoader = true,
  } = props;
  const { getElements } = api;

  const tabs = useTabs(getElements, entry);

  const shouldScale = viewMode === 'story';
  const { showToolbar, showTabs = true } = options;
  const visibleTabsInToolbar = showTabs ? tabs : [];

  const previousStoryId = useRef(storyId);

  useEffect(() => {
    if (entry && viewMode) {
      // Don't emit the event on first ("real") render, only when entry changes
      if (storyId !== previousStoryId.current) {
        previousStoryId.current = storyId;

        if (viewMode.match(/docs|story/)) {
          const { refId, id } = entry;
          api.emit(SET_CURRENT_STORY, {
            storyId: id,
            viewMode,
            options: { target: refId },
          });
        }
      }
    }
  }, [entry, viewMode]);

  return (
    <Fragment>
      {previewId === 'main' && (
        <Helmet key="description">
          <title>{description}</title>
        </Helmet>
      )}
      <ZoomProvider shouldScale={shouldScale}>
        <ToolbarComp
          key="tools"
          entry={entry}
          api={api}
          isShown={showToolbar}
          tabs={visibleTabsInToolbar}
        />
        <S.FrameWrap key="frame" offset={showToolbar ? 40 : 0}>
          <Canvas {...{ withLoader, baseUrl }} />
          {tabs.map(({ render: Render, match, ...t }, i) => {
            // @ts-expect-error (Converted from ts-ignore)
            const key = t.id || t.key || i;
            return (
              <Fragment key={key}>
                <Location>{(lp) => <Render active={match(lp)} />}</Location>
              </Fragment>
            );
          })}
        </S.FrameWrap>
      </ZoomProvider>
    </Fragment>
  );
});

export { Preview };

const Canvas: FC<{ withLoader: boolean; baseUrl: string; children?: never }> = ({
  baseUrl,
  withLoader,
}) => {
  return (
    <Consumer filter={canvasMapper}>
      {({
        entry,
        refs,
        customCanvas,
        storyId,
        refId,
        viewMode,
        queryParams,
        getElements,
        previewInitialized,
        active,
      }) => {
        const id = 'canvas';
        const wrappers = useMemo(
          () => [...defaultWrappers, ...getWrappers(getElements)],
          [getElements, ...defaultWrappers]
        );

        const [progress, setProgress] = useState(undefined);
        useEffect(() => {
          if (FEATURES?.storyStoreV7 && global.CONFIG_TYPE === 'DEVELOPMENT') {
            try {
              const channel = addons.getServerChannel();

              channel.on(PREVIEW_BUILDER_PROGRESS, (options) => {
                setProgress(options);
              });
            } catch {
              //
            }
          }
        }, []);
        // A ref simply depends on its readiness
        const refLoading = !!refs[refId] && !refs[refId].previewInitialized;
        // The root also might need to wait on webpack
        const isBuilding = !(progress?.value === 1 || progress === undefined);
        const rootLoading = !refId && (!previewInitialized || isBuilding);
        const isLoading = entry ? refLoading || rootLoading : rootLoading;

        return (
          <ZoomConsumer>
            {({ value: scale }) => {
              return (
                <>
                  {withLoader && isLoading && (
                    <S.LoaderWrapper>
                      <Loader id="preview-loader" role="progressbar" progress={progress} />
                    </S.LoaderWrapper>
                  )}
                  <ApplyWrappers
                    id={id}
                    storyId={storyId}
                    viewMode={viewMode}
                    active={active}
                    wrappers={wrappers}
                  >
                    {customCanvas ? (
                      customCanvas(storyId, viewMode, id, baseUrl, scale, queryParams)
                    ) : (
                      <FramesRenderer
                        baseUrl={baseUrl}
                        refs={refs}
                        scale={scale}
                        entry={entry}
                        viewMode={viewMode}
                        refId={refId}
                        queryParams={queryParams}
                        storyId={storyId}
                      />
                    )}
                  </ApplyWrappers>
                </>
              );
            }}
          </ZoomConsumer>
        );
      }}
    </Consumer>
  );
};

function filterTabs(panels: Addon_BaseType[], parameters: Record<string, any>) {
  const { previewTabs } = addons.getConfig();
  const parametersTabs = parameters ? parameters.previewTabs : undefined;

  if (previewTabs || parametersTabs) {
    // deep merge global and local settings
    const tabs = merge(previewTabs, parametersTabs);
    const arrTabs = Object.keys(tabs).map((key, index) => ({
      index,
      ...(typeof tabs[key] === 'string' ? { title: tabs[key] } : tabs[key]),
      id: key,
    }));
    return panels
      .filter((panel) => {
        const t = arrTabs.find((tab) => tab.id === panel.id);
        return t === undefined || t.id === 'canvas' || !t.hidden;
      })
      .map((panel, index) => ({ ...panel, index } as Addon_BaseType))
      .sort((p1, p2) => {
        /* eslint-disable @typescript-eslint/naming-convention */
        const tab_1 = arrTabs.find((tab) => tab.id === p1.id);
        // @ts-expect-error (Converted from ts-ignore)
        const index_1 = tab_1 ? tab_1.index : arrTabs.length + p1.index;
        const tab_2 = arrTabs.find((tab) => tab.id === p2.id);
        // @ts-expect-error (Converted from ts-ignore)
        const index_2 = tab_2 ? tab_2.index : arrTabs.length + p2.index;
        return index_1 - index_2;
        /* eslint-enable @typescript-eslint/naming-convention */
      })
      .map((panel) => {
        const t = arrTabs.find((tab) => tab.id === panel.id);
        if (t) {
          return {
            ...panel,
            title: t.title || panel.title,
            disabled: t.disabled,
            hidden: t.hidden,
          } as Addon_BaseType;
        }
        return panel;
      });
  }
  return panels;
}
