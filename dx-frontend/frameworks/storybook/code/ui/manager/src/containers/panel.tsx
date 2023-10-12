import type { FC } from 'react';
import React from 'react';
import memoize from 'memoizerific';
import { Consumer, type Combo } from '@storybook/manager-api';

import AddonPanel from '../components/panel/panel';

const createPanelActions = memoize(1)((api) => ({
  onSelect: (panel: string) => api.setSelectedPanel(panel),
  toggleVisibility: () => api.togglePanel(),
  togglePosition: () => api.togglePanelPosition(),
}));

const mapper = ({ state, api }: Combo) => ({
  panels: api.getStoryPanels(),
  selectedPanel: api.getSelectedPanel(),
  panelPosition: state.layout.panelPosition,
  actions: createPanelActions(api),
  shortcuts: api.getShortcutKeys(),
});

const Panel: FC<any> = (props) => (
  <Consumer filter={mapper}>{(customProps) => <AddonPanel {...props} {...customProps} />}</Consumer>
);

export default Panel;
