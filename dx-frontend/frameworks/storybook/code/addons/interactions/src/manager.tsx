import React, { useCallback } from 'react';
import type { Combo } from '@storybook/manager-api';
import { addons, Consumer, types, useAddonState } from '@storybook/manager-api';
import { AddonPanel, Badge, Spaced } from '@storybook/components';
import { CallStates } from '@storybook/instrumenter';
import { ADDON_ID, PANEL_ID } from './constants';
import { Panel } from './Panel';
import { TabIcon } from './components/TabStatus';

function Title() {
  const [addonState = {}] = useAddonState(ADDON_ID);
  const { hasException, interactionsCount } = addonState as any;

  return (
    <div>
      <Spaced col={1}>
        <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>Interactions</span>
        {interactionsCount && !hasException ? (
          <Badge status="neutral">{interactionsCount}</Badge>
        ) : null}
        {hasException ? <TabIcon status={CallStates.ERROR} /> : null}
      </Spaced>
    </div>
  );
}

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: Title,
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active }) => {
      const newLocal = useCallback(({ state }: Combo) => {
        return {
          storyId: state.storyId,
        };
      }, []);

      return (
        <AddonPanel active={active}>
          <Consumer filter={newLocal}>{({ storyId }) => <Panel storyId={storyId} />}</Consumer>
        </AddonPanel>
      );
    },
  });
});
