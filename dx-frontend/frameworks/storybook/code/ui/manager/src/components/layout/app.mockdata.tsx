import { global } from '@storybook/global';
import type { FC } from 'react';
import React, { Component } from 'react';
import { styled } from '@storybook/theming';
import type { Addon_BaseType, Addon_Collection } from '@storybook/types';
import { Addon_TypesEnum } from '@storybook/types';
import type { State } from '@storybook/manager-api';
import type { SidebarProps } from '../sidebar/Sidebar';
import { Sidebar } from '../sidebar/Sidebar';
import Panel from '../panel/panel';
import { Preview } from '../preview/preview';

import { previewProps } from '../preview/preview.mockdata';
import { mockDataset } from '../sidebar/mockdata';
import type { DesktopProps } from './desktop';

const { setInterval } = global;

export const shortcuts: State['shortcuts'] = {
  fullScreen: ['F'],
  togglePanel: ['A'],
  panelPosition: ['D'],
  toggleNav: ['S'],
  toolbar: ['T'],
  search: ['/'],
  focusNav: ['1'],
  focusIframe: ['2'],
  focusPanel: ['3'],
  prevComponent: ['alt', 'ArrowUp'],
  nextComponent: ['alt', 'ArrowDown'],
  prevStory: ['alt', 'ArrowLeft'],
  nextStory: ['alt', 'ArrowRight'],
  shortcutsPage: ['ctrl', 'shift', ','],
  aboutPage: [','],
  escape: ['escape'],
  collapseAll: ['ctrl', 'shift', 'ArrowUp'],
  expandAll: ['ctrl', 'shift', 'ArrowDown'],
  remount: ['alt', 'R'],
};

export const panels: Addon_Collection<Addon_BaseType> = {
  test1: {
    title: 'Test 1',
    type: Addon_TypesEnum.PANEL,
    render: ({ active }) => (active ? <div id="test1">TEST 1</div> : null),
  },
  test2: {
    title: 'Test 2',
    type: Addon_TypesEnum.PANEL,
    render: ({ active }) => (active ? <div id="test2">TEST 2</div> : null),
  },
};

const realSidebarProps: SidebarProps = {
  index: mockDataset.withRoot as SidebarProps['index'],
  menu: [],
  refs: {},
  status: {},
  previewInitialized: true,
  extra: [],
};

const PlaceholderBlock = styled.div(({ color }) => ({
  background: color || 'hotpink',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}));

class PlaceholderClock extends Component<{ color: string }, { count: number }> {
  state = {
    count: 1,
  };

  interval: ReturnType<typeof setTimeout>;

  componentDidMount() {
    this.interval = setInterval(() => {
      const { count } = this.state;
      this.setState({ count: count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    const { interval } = this;
    clearInterval(interval);
  }

  render() {
    const { children, color } = this.props;
    const { count } = this.state;
    return (
      <PlaceholderBlock color={color}>
        <h2
          data-chromatic="ignore"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            color: 'rgba(0,0,0,0.2)',
            fontSize: '150px',
            lineHeight: '150px',
            margin: '-20px',
          }}
        >
          {count}
        </h2>
        {children}
      </PlaceholderBlock>
    );
  }
}

const MockSidebar: FC<any> = (props) => (
  <PlaceholderClock color="hotpink">
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </PlaceholderClock>
);
const MockPreview: FC<any> = (props) => (
  <PlaceholderClock color="deepskyblue">
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </PlaceholderClock>
);
const MockPanel: FC<any> = (props) => (
  <PlaceholderClock color="orangered">
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </PlaceholderClock>
);
export const MockPage: FC<any> = (props) => (
  <PlaceholderClock color="cyan">
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </PlaceholderClock>
);

export const mockProps: DesktopProps = {
  Sidebar: MockSidebar,
  Preview: MockPreview,
  Panel: MockPanel,
  Notifications: () => null,
  pages: [],
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    showToolbar: true,
    initialActive: 'canvas',
    showTabs: true,
  },
  viewMode: 'story',
  panelCount: 2,
  width: 1112,
  height: 834,
};

export const realProps: DesktopProps = {
  Sidebar: () => <Sidebar {...realSidebarProps} />,
  Preview: () => <Preview {...previewProps} />,
  Notifications: () => null,
  Panel: () => (
    <Panel
      panels={panels}
      actions={{ onSelect: () => {}, toggleVisibility: () => {}, togglePosition: () => {} }}
      selectedPanel="test2"
      panelPosition="bottom"
      shortcuts={shortcuts}
      absolute={false}
    />
  ),
  pages: [],
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    showToolbar: true,
    initialActive: 'canvas',
    showTabs: true,
  },
  viewMode: 'story',
  panelCount: 2,
  width: 900,
  height: 600,
};
