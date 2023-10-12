import type { FC } from 'react';
import React, { useRef, Fragment } from 'react';
import type { Combo } from '@storybook/manager-api';
import { Consumer } from '@storybook/manager-api';
import { Button, getStoryHref } from '@storybook/components';
import { Global, styled } from '@storybook/theming';
import type { CSSObject } from '@storybook/theming';
import { IFrame } from './iframe';
import type { FramesRendererProps } from './utils/types';
import { stringifyQueryParams } from './utils/stringifyQueryParams';

const getActive = (refId: FramesRendererProps['refId'], refs: FramesRendererProps['refs']) => {
  if (refId && refs[refId]) {
    return `storybook-ref-${refId}`;
  }

  return 'storybook-preview-iframe';
};

const SkipToSidebarLink = styled(Button)(({ theme }) => ({
  display: 'none',
  '@media (min-width: 600px)': {
    position: 'absolute',
    display: 'block',
    top: 10,
    right: 15,
    padding: '10px 15px',
    fontSize: theme.typography.size.s1,
    transform: 'translateY(-100px)',
    '&:focus': {
      transform: 'translateY(0)',
      zIndex: 1,
    },
  },
}));

const whenSidebarIsVisible = ({ state }: Combo) => ({
  isFullscreen: state.layout.isFullscreen,
  showNav: state.layout.showNav,
  selectedStoryId: state.storyId,
});

const styles: CSSObject = {
  '#root [data-is-storybook="false"]': {
    display: 'none',
  },
  '#root [data-is-storybook="true"]': {
    display: 'block',
  },
};

export const FramesRenderer: FC<FramesRendererProps> = ({
  refs,
  scale,
  viewMode = 'story',
  refId,
  queryParams = {},
  baseUrl,
  storyId = '*',
}) => {
  const version = refs[refId]?.version;
  const stringifiedQueryParams = stringifyQueryParams({
    ...queryParams,
    ...(version && { version }),
  });
  const active = getActive(refId, refs);
  const { current: frames } = useRef<Record<string, string>>({});

  const refsToLoad = Object.values(refs).filter((ref) => {
    return ref.type === 'auto-inject' || ref.id === refId;
  }, {});

  if (!frames['storybook-preview-iframe']) {
    frames['storybook-preview-iframe'] = getStoryHref(baseUrl, storyId, {
      ...queryParams,
      ...(version && { version }),
      viewMode,
    });
  }

  refsToLoad.forEach((ref) => {
    const id = `storybook-ref-${ref.id}`;
    const existingUrl = frames[id]?.split('/iframe.html')[0];
    if (!existingUrl || ref.url !== existingUrl) {
      const newUrl = `${ref.url}/iframe.html?id=${storyId}&viewMode=${viewMode}&refId=${ref.id}${stringifiedQueryParams}`;
      frames[id] = newUrl;
    }
  });

  return (
    <Fragment>
      <Global styles={styles} />
      <Consumer filter={whenSidebarIsVisible}>
        {({ isFullscreen, showNav, selectedStoryId }) => {
          if (!isFullscreen && !!showNav && selectedStoryId) {
            return (
              <SkipToSidebarLink secondary isLink tabIndex={0} href={`#${selectedStoryId}`}>
                Skip to sidebar
              </SkipToSidebarLink>
            );
          }
          return null;
        }}
      </Consumer>
      {Object.entries(frames).map(([id, src]) => {
        return (
          <Fragment key={id}>
            <IFrame
              active={id === active}
              key={id}
              id={id}
              title={id}
              src={src}
              allowFullScreen
              scale={scale}
            />
          </Fragment>
        );
      })}
    </Fragment>
  );
};
