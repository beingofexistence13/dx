import type { SyntheticEvent, MouseEventHandler } from 'react';
import React, { Component, useCallback } from 'react';

import { Icons, IconButton, Separator } from '@storybook/components';
import type { Addon_BaseType } from '@storybook/types';
import { types } from '@storybook/manager-api';

const initialZoom = 1 as const;

const Context = React.createContext({ value: initialZoom, set: (v: number) => {} });

class ZoomProvider extends Component<{ shouldScale: boolean }, { value: number }> {
  state = {
    value: initialZoom,
  };

  set = (value: number) => this.setState({ value });

  render() {
    const { children, shouldScale } = this.props;
    const { set } = this;
    const { value } = this.state;
    return (
      <Context.Provider value={{ value: shouldScale ? value : initialZoom, set }}>
        {children}
      </Context.Provider>
    );
  }
}

const { Consumer: ZoomConsumer } = Context;

const Zoom = React.memo<{
  zoomIn: MouseEventHandler;
  zoomOut: MouseEventHandler;
  reset: MouseEventHandler;
}>(function Zoom({ zoomIn, zoomOut, reset }) {
  return (
    <>
      <IconButton key="zoomin" onClick={zoomIn} title="Zoom in">
        <Icons icon="zoom" />
      </IconButton>
      <IconButton key="zoomout" onClick={zoomOut} title="Zoom out">
        <Icons icon="zoomout" />
      </IconButton>
      <IconButton key="zoomreset" onClick={reset} title="Reset zoom">
        <Icons icon="zoomreset" />
      </IconButton>
    </>
  );
});

export { Zoom, ZoomConsumer, ZoomProvider };

const ZoomWrapper = React.memo<{ set: (zoomLevel: number) => void; value: number }>(
  function ZoomWrapper({ set, value }) {
    const zoomIn = useCallback(
      (e: SyntheticEvent) => {
        e.preventDefault();
        set(0.8 * value);
      },
      [set, value]
    );
    const zoomOut = useCallback(
      (e: SyntheticEvent) => {
        e.preventDefault();
        set(1.25 * value);
      },
      [set, value]
    );
    const reset = useCallback(
      (e) => {
        e.preventDefault();
        set(initialZoom);
      },
      [set, initialZoom]
    );
    return <Zoom key="zoom" {...{ zoomIn, zoomOut, reset }} />;
  }
);

export const zoomTool: Addon_BaseType = {
  title: 'zoom',
  id: 'zoom',
  type: types.TOOL,
  match: ({ viewMode }) => viewMode === 'story',
  render: React.memo(function ZoomToolRenderer() {
    return (
      <>
        <ZoomConsumer>{({ set, value }) => <ZoomWrapper {...{ set, value }} />}</ZoomConsumer>
        <Separator />
      </>
    );
  }),
};
