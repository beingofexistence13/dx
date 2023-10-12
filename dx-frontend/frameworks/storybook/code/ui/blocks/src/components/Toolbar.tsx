import type { FC, MouseEvent } from 'react';
import React, { Fragment } from 'react';
import { styled } from '@storybook/theming';
import { FlexBar, Icons, IconButton, IconButtonSkeleton } from '@storybook/components';

interface ZoomProps {
  zoom: (val: number) => void;
  resetZoom: () => void;
}

interface EjectProps {
  storyId?: string;
  baseUrl?: string;
}

interface BarProps {
  border?: boolean;
}

interface LoadingProps {
  isLoading?: boolean;
}

export type ToolbarProps = BarProps & ZoomProps & EjectProps & LoadingProps;

const Zoom: FC<ZoomProps> = ({ zoom, resetZoom }) => (
  <>
    <IconButton
      key="zoomin"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        zoom(0.8);
      }}
      title="Zoom in"
    >
      <Icons icon="zoom" />
    </IconButton>
    <IconButton
      key="zoomout"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        zoom(1.25);
      }}
      title="Zoom out"
    >
      <Icons icon="zoomout" />
    </IconButton>
    <IconButton
      key="zoomreset"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        resetZoom();
      }}
      title="Reset zoom"
    >
      <Icons icon="zoomreset" />
    </IconButton>
  </>
);

const Bar = styled(FlexBar)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  transition: 'transform .2s linear',
});

export const Toolbar: FC<ToolbarProps> = ({
  isLoading,
  storyId,
  baseUrl,
  zoom,
  resetZoom,
  ...rest
}) => (
  <Bar {...rest}>
    <Fragment key="left">
      {isLoading ? (
        [1, 2, 3].map((key) => <IconButtonSkeleton key={key} />)
      ) : (
        <Zoom {...{ zoom, resetZoom }} />
      )}
    </Fragment>
  </Bar>
);
