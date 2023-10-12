import React, { Component, Fragment } from 'react';
import { Tabs, Icons, IconButton } from '@storybook/components';
import type { State } from '@storybook/manager-api';
import { shortcutToHumanString } from '@storybook/manager-api';
import type { Addon_BaseType } from '@storybook/types';
import useMediaQuery from '../hooks/useMedia';

export interface SafeTabProps {
  title: Addon_BaseType['title'];
  id: string;
  children: Addon_BaseType['render'];
}

class SafeTab extends Component<SafeTabProps, { hasError: boolean }> {
  constructor(props: SafeTabProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: any) {
    this.setState({ hasError: true });
    // eslint-disable-next-line no-console
    console.error(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

const AddonPanel = React.memo<{
  selectedPanel?: string;
  actions: { onSelect: (id: string) => void } & Record<string, any>;
  panels: Record<string, Addon_BaseType>;
  shortcuts: State['shortcuts'];
  panelPosition?: 'bottom' | 'right';
  absolute?: boolean;
}>(
  ({
    panels,
    shortcuts,
    actions,
    selectedPanel = null,
    panelPosition = 'right',
    absolute = true,
  }) => {
    const isTablet = useMediaQuery('(min-width: 599px)');
    return (
      <Tabs
        absolute={absolute}
        {...(selectedPanel ? { selected: selectedPanel } : {})}
        menuName="Addons"
        actions={actions}
        tools={
          isTablet ? (
            <Fragment>
              <IconButton
                key="position"
                onClick={actions.togglePosition}
                title={`Change addon orientation [${shortcutToHumanString(
                  shortcuts.panelPosition
                )}]`}
              >
                <Icons icon={panelPosition === 'bottom' ? 'sidebaralt' : 'bottombar'} />
              </IconButton>
              <IconButton
                key="visibility"
                onClick={actions.toggleVisibility}
                title={`Hide addons [${shortcutToHumanString(shortcuts.togglePanel)}]`}
              >
                <Icons icon="close" />
              </IconButton>
            </Fragment>
          ) : undefined
        }
        id="storybook-panel-root"
      >
        {Object.entries(panels).map(([k, v]) => (
          <SafeTab key={k} id={k} title={typeof v.title === 'function' ? <v.title /> : v.title}>
            {v.render}
          </SafeTab>
        ))}
      </Tabs>
    );
  }
);

AddonPanel.displayName = 'AddonPanel';

export default AddonPanel;
