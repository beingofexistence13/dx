import type { ComponentType, FC, ReactNode } from 'react';
import React, { Fragment, Children, useCallback, useState } from 'react';
import { type State, ActiveTabs, useStorybookApi } from '@storybook/manager-api';
import { styled } from '@storybook/theming';

import { TabButton } from '@storybook/components';
import { Location } from '@storybook/router';
import type { Addon_PageType } from '@storybook/types';
import { Root } from './Root';

export type ActiveTabsType = 'sidebar' | 'canvas' | 'addons';

const { SIDEBAR, CANVAS, ADDONS } = ActiveTabs;

const Pane = styled.div<{ index: number; active: ActiveTabsType }>(
  {
    transition: 'transform .2s ease',
    position: 'absolute',
    top: 0,
    height: '100%',
    overflow: 'auto',
  },
  ({ theme }) => ({
    background: theme.background.content,
    '&:nth-of-type(1)': {
      borderRight: `1px solid ${theme.appBorderColor}`,
    },
    '&:nth-of-type(3)': {
      borderLeft: `1px solid ${theme.appBorderColor}`,
    },
  }),
  ({ index }) => {
    switch (index) {
      case 0: {
        return {
          width: '80vw',
          transform: 'translateX(-80vw)',
          left: 0,
        };
      }
      case 1: {
        return {
          width: '100%',
          transform: 'translateX(0) scale(1)',
          left: 0,
        };
      }
      case 2: {
        return {
          width: '80vw',
          transform: 'translateX(80vw)',
          right: 0,
        };
      }
      default: {
        return {};
      }
    }
  },
  ({ active, index }) => {
    switch (true) {
      case index === 0 && active === SIDEBAR: {
        return {
          transform: 'translateX(-0px)',
        };
      }
      case index === 1 && active === SIDEBAR: {
        return {
          transform: 'translateX(40vw) translateY(-42.5vh) translateY(40px) scale(0.2)',
        };
      }
      case index === 1 && active === ADDONS: {
        return {
          transform: 'translateX(-40vw) translateY(-42.5vh) translateY(40px) scale(0.2)',
        };
      }
      case index === 2 && active === ADDONS: {
        return {
          transform: 'translateX(0px)',
        };
      }
      default: {
        return {};
      }
    }
  }
);

const Panels = React.memo((({ children, active, isFullscreen }) => (
  <PanelsContainer isFullscreen={isFullscreen}>
    {Children.toArray(children).map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Pane key={index} index={index} active={active}>
        {item}
      </Pane>
    ))}
  </PanelsContainer>
)) as FC<{ active: ActiveTabsType; children: ReactNode; isFullscreen: boolean }>);
Panels.displayName = 'Panels';

const PanelsContainer = styled.div<{ isFullscreen: boolean }>(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
  },
  ({ isFullscreen }) => ({
    height: isFullscreen ? '100vh' : 'calc(100% - 40px)',
  })
);

const Bar = styled.nav(
  {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100vw',
    height: 40,
    display: 'flex',
    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)',

    '& > *': {
      flex: 1,
    },
  },
  ({ theme }) => ({
    background: theme.barBg,
  })
);

export interface MobileProps {
  options: Pick<State['layout'], 'isFullscreen' | 'showPanel' | 'initialActive' | 'showToolbar'>;
  Sidebar: ComponentType<any>;
  Preview: ComponentType<any>;
  Panel: ComponentType<any>;
  Notifications: ComponentType<any>;
  viewMode: State['viewMode'];
  pages: Addon_PageType[];
}

export interface MobileState {
  active: ActiveTabsType;
}

export const Mobile = ({
  Sidebar,
  Preview,
  Panel,
  Notifications,
  pages,
  viewMode,
  options,
}: MobileProps) => {
  const [{ active }, setState] = useState({
    active: options.isFullscreen ? CANVAS : options.initialActive || SIDEBAR,
  });
  const api = useStorybookApi();
  const handleCanvasClick = useCallback(() => {
    setState({ active: CANVAS });
    const id = api.retrieveSelection();
    if (id) {
      api.selectStory(id);
    } else {
      api.selectFirstStory();
    }
  }, []);

  const handleSideBarClick = useCallback(() => {
    setState({ active: SIDEBAR });
    const id = api.retrieveSelection();
    if (id) {
      api.selectStory(id);
    } else {
      api.selectFirstStory();
    }
  }, []);

  return (
    <Root>
      <Notifications
        placement={{
          position: 'fixed',
          bottom: 60,
          left: 20,
          right: 20,
        }}
      />

      <Panels active={active} isFullscreen={options.isFullscreen}>
        <Sidebar />
        <div>
          <div hidden={viewMode !== 'docs' && viewMode !== 'story'}>
            <Preview showToolbar={options.showToolbar} id="main" viewMode={viewMode} />
          </div>
          {pages.map(({ id, render: Content }) => (
            <Fragment key={id}>
              <Content />
            </Fragment>
          ))}
        </div>
        <Panel hidden={viewMode !== 'story'} />
      </Panels>
      {!options.isFullscreen && (
        <Bar>
          <TabButton onClick={handleSideBarClick} active={active === SIDEBAR}>
            Sidebar
          </TabButton>
          <TabButton
            onClick={handleCanvasClick}
            active={active === CANVAS && (viewMode === 'docs' || viewMode === 'story')}
          >
            Canvas
          </TabButton>
          <Location>
            {({ path }) => (
              <>
                {pages.map(({ id, title, url }) => (
                  <TabButton
                    key={id}
                    onClick={() => {
                      setState({ active: CANVAS });
                      api.navigateUrl(url, { plain: false });
                    }}
                    active={active === CANVAS && path.startsWith(url)}
                  >
                    {title}
                  </TabButton>
                ))}
              </>
            )}
          </Location>
          {viewMode === 'story' && options.showPanel ? (
            <TabButton onClick={() => setState({ active: ADDONS })} active={active === ADDONS}>
              Addons
            </TabButton>
          ) : null}
        </Bar>
      )}
    </Root>
  );
};
