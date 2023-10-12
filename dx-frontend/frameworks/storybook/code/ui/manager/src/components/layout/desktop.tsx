import type { ComponentType } from 'react';
import React, { Fragment } from 'react';

import type { State } from '@storybook/manager-api';
import { Route } from '@storybook/router';
import type { Addon_PageType } from '@storybook/types';
import * as S from './container';

export interface DesktopProps {
  width: number;
  panelCount: number;
  height: number;
  Sidebar: ComponentType<any>;
  Preview: ComponentType<any>;
  Panel: ComponentType<any>;
  Notifications: ComponentType<any>;
  pages: Addon_PageType[];
  options: State['layout'];
  viewMode: string;
}

const Desktop = Object.assign(
  React.memo<DesktopProps>(function Desktop({
    Panel,
    Sidebar,
    Preview,
    Notifications,
    pages,
    options,
    viewMode = undefined,
    width = 0,
    height = 0,
    panelCount,
  }) {
    return (
      <Fragment>
        <Notifications
          placement={{
            position: 'fixed',
            bottom: 20,
            left: 20,
          }}
        />
        {width && height ? (
          <S.Layout
            options={options}
            bounds={{ width, height, top: 0, left: 0 }}
            viewMode={viewMode}
            panelCount={panelCount}
          >
            {({ navProps, mainProps, panelProps, previewProps }) => (
              <Fragment>
                <S.Sidebar {...navProps}>
                  <Sidebar />
                </S.Sidebar>
                <S.Main {...mainProps} isFullscreen={!!mainProps.isFullscreen}>
                  <Route path={/(^\/story|docs|onboarding\/|^\/$)/} hideOnly>
                    <S.Preview {...previewProps} hidden={false}>
                      <Preview id="main" />
                    </S.Preview>

                    <Route path="/story/" startsWith hideOnly>
                      <S.Panel {...panelProps} hidden={false}>
                        <Panel />
                      </S.Panel>
                    </Route>
                  </Route>

                  {pages.map(({ id, render: Content }) => (
                    <Fragment key={id}>
                      <Content />
                    </Fragment>
                  ))}
                </S.Main>
              </Fragment>
            )}
          </S.Layout>
        ) : (
          <div title={JSON.stringify({ width, height })} />
        )}
      </Fragment>
    );
  }),
  {
    displayName: 'DesktopLayout',
  }
);

export { Desktop };
