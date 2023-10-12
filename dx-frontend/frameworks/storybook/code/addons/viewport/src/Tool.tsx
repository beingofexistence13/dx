import type { ReactNode, FC } from 'react';
import React, { useState, Fragment, useEffect, useRef, memo } from 'react';
import memoize from 'memoizerific';

import { styled, Global, type Theme, withTheme } from '@storybook/theming';

import { Icons, IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';

import { useStorybookApi, useParameter, useAddonState } from '@storybook/manager-api';
import { registerShortcuts } from './shortcuts';
import { PARAM_KEY, ADDON_ID } from './constants';
import { MINIMAL_VIEWPORTS } from './defaults';
import type { ViewportAddonParameter, ViewportMap, ViewportStyles, Styles } from './models';

interface ViewportItem {
  id: string;
  title: string;
  styles: Styles;
  type: 'desktop' | 'mobile' | 'tablet' | 'other';
  default?: boolean;
}

const toList = memoize(50)((items: ViewportMap): ViewportItem[] => [
  ...baseViewports,
  ...Object.entries(items).map(([id, { name, ...rest }]) => ({ ...rest, id, title: name })),
]);

const responsiveViewport: ViewportItem = {
  id: 'reset',
  title: 'Reset viewport',
  styles: null,
  type: 'other',
};

const baseViewports: ViewportItem[] = [responsiveViewport];

const toLinks = memoize(50)((list: ViewportItem[], active: LinkBase, set, state, close): Link[] => {
  return list
    .filter((i) => i.id !== responsiveViewport.id || active.id !== i.id)
    .map((i) => {
      return {
        ...i,
        onClick: () => {
          set({ ...state, selected: i.id });
          close();
        },
      };
    });
});

const wrapperId = 'storybook-preview-wrapper';

interface LinkBase {
  id: string;
  title: string;
  right?: ReactNode;
  type: 'desktop' | 'mobile' | 'tablet' | 'other';
  styles: ViewportStyles | ((s: ViewportStyles) => ViewportStyles) | null;
}

interface Link extends LinkBase {
  onClick: () => void;
}

const flip = ({ width, height, ...styles }: ViewportStyles) => ({
  ...styles,
  height: width,
  width: height,
});

const ActiveViewportSize = styled.div(() => ({
  display: 'inline-flex',
}));

const ActiveViewportLabel = styled.div(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  padding: 10,
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2 - 1,
  lineHeight: '1',
  height: 40,
  border: 'none',
  borderTop: '3px solid transparent',
  borderBottom: '3px solid transparent',
  background: 'transparent',
}));

const IconButtonWithLabel = styled(IconButton)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
}));

const IconButtonLabel = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  marginLeft: 10,
}));

interface ViewportToolState {
  isRotated: boolean;
  selected: string | null;
}

const getStyles = (
  prevStyles: ViewportStyles | undefined,
  styles: Styles,
  isRotated: boolean
): ViewportStyles | undefined => {
  if (styles === null) {
    return undefined;
  }

  const result = typeof styles === 'function' ? styles(prevStyles) : styles;
  return isRotated ? flip(result) : result;
};

export const ViewportTool: FC = memo(
  withTheme(({ theme }: { theme: Theme }) => {
    const {
      viewports = MINIMAL_VIEWPORTS,
      defaultOrientation = 'portrait',
      defaultViewport = responsiveViewport.id,
      disable,
    } = useParameter<ViewportAddonParameter>(PARAM_KEY, {});
    const [state, setState] = useAddonState<ViewportToolState>(ADDON_ID, {
      selected: defaultViewport,
      isRotated: defaultOrientation === 'landscape',
    });

    const list = toList(viewports);
    const api = useStorybookApi();
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    if (!list.find((i) => i.id === defaultViewport)) {
      // eslint-disable-next-line no-console
      console.warn(
        `Cannot find "defaultViewport" of "${defaultViewport}" in addon-viewport configs, please check the "viewports" setting in the configuration.`
      );
    }

    useEffect(() => {
      registerShortcuts(api, setState, Object.keys(viewports));
    }, [viewports]);

    useEffect(() => {
      setState({
        selected:
          defaultViewport ||
          (state.selected && viewports[state.selected] ? state.selected : responsiveViewport.id),
        isRotated: defaultOrientation === 'landscape',
      });
    }, [defaultOrientation, defaultViewport]);

    const { selected, isRotated } = state;
    const item =
      list.find((i) => i.id === selected) ||
      list.find((i) => i.id === defaultViewport) ||
      list.find((i) => i.default) ||
      responsiveViewport;

    const ref = useRef<ViewportStyles>();

    const styles = getStyles(ref.current, item.styles, isRotated);

    useEffect(() => {
      ref.current = styles;
    }, [item]);

    if (disable || Object.entries(viewports).length === 0) {
      return null;
    }

    return (
      <Fragment>
        <WithTooltip
          placement="top"
          tooltip={({ onHide }) => (
            <TooltipLinkList links={toLinks(list, item, setState, state, onHide)} />
          )}
          closeOnOutsideClick
          onVisibleChange={setIsTooltipVisible}
        >
          <IconButtonWithLabel
            key="viewport"
            title="Change the size of the preview"
            active={isTooltipVisible || !!styles}
            onDoubleClick={() => {
              setState({ ...state, selected: responsiveViewport.id });
            }}
          >
            <Icons icon="grow" />
            {styles ? (
              <IconButtonLabel>
                {isRotated ? `${item.title} (L)` : `${item.title} (P)`}
              </IconButtonLabel>
            ) : null}
          </IconButtonWithLabel>
        </WithTooltip>

        {styles ? (
          <ActiveViewportSize>
            <Global
              styles={{
                [`iframe[data-is-storybook="true"]`]: {
                  margin: `auto`,
                  transition: 'none',
                  position: 'relative',
                  border: `1px solid black`,
                  boxShadow: '0 0 100px 100vw rgba(0,0,0,0.5)',

                  ...styles,
                },
                [`#${wrapperId}`]: {
                  padding: theme.layoutMargin,
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  justifyItems: 'center',
                  overflow: 'auto',

                  display: 'grid',
                  gridTemplateColumns: '100%',
                  gridTemplateRows: '100%',
                },
              }}
            />
            <ActiveViewportLabel title="Viewport width">
              {styles.width.replace('px', '')}
            </ActiveViewportLabel>
            <IconButton
              key="viewport-rotate"
              title="Rotate viewport"
              onClick={() => {
                setState({ ...state, isRotated: !isRotated });
              }}
            >
              <Icons icon="transfer" />
            </IconButton>
            <ActiveViewportLabel title="Viewport height">
              {styles.height.replace('px', '')}
            </ActiveViewportLabel>
          </ActiveViewportSize>
        ) : null}
      </Fragment>
    );
  })
);
