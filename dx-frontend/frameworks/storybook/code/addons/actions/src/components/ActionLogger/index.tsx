import type { FC } from 'react';
import React, { Fragment } from 'react';
import { styled, withTheme } from '@storybook/theming';
import type { Theme } from '@storybook/theming';

import { Inspector } from 'react-inspector';
import { ActionBar, ScrollArea } from '@storybook/components';

import { Action, InspectorContainer, Counter } from './style';
import type { ActionDisplay } from '../../models';

const UnstyledWrapped: FC<{ className?: string }> = ({ children, className }) => (
  <ScrollArea horizontal vertical className={className}>
    {children}
  </ScrollArea>
);
export const Wrapper = styled(UnstyledWrapped)({
  margin: 0,
  padding: '10px 5px 20px',
});

interface InspectorProps {
  theme: Theme & { addonActionsTheme?: string };
  sortObjectKeys: boolean;
  showNonenumerable: boolean;
  name: any;
  data: any;
}

const ThemedInspector = withTheme(({ theme, ...props }: InspectorProps) => (
  <Inspector theme={theme.addonActionsTheme || 'chromeLight'} table={false} {...props} />
));

interface ActionLoggerProps {
  actions: ActionDisplay[];
  onClear: () => void;
}

export const ActionLogger = ({ actions, onClear }: ActionLoggerProps) => (
  <Fragment>
    <Wrapper>
      {actions.map((action: ActionDisplay) => (
        <Action key={action.id}>
          {action.count > 1 && <Counter>{action.count}</Counter>}
          <InspectorContainer>
            <ThemedInspector
              sortObjectKeys
              showNonenumerable={false}
              name={action.data.name}
              data={action.data.args || action.data}
            />
          </InspectorContainer>
        </Action>
      ))}
    </Wrapper>

    <ActionBar actionItems={[{ title: 'Clear', onClick: onClear }]} />
  </Fragment>
);
