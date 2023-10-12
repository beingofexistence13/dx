import * as React from 'react';
import { Link, Placeholder } from '@storybook/components';
import { type Call, CallStates, type ControlStates } from '@storybook/instrumenter';
import { styled } from '@storybook/theming';
import { transparentize } from 'polished';

import { Subnav } from './Subnav';

import { Interaction } from './Interaction';

export interface Controls {
  start: (args: any) => void;
  back: (args: any) => void;
  goto: (args: any) => void;
  next: (args: any) => void;
  end: (args: any) => void;
  rerun: (args: any) => void;
}

interface InteractionsPanelProps {
  controls: Controls;
  controlStates: ControlStates;
  interactions: (Call & {
    status?: CallStates;
    childCallIds: Call['id'][];
    isHidden: boolean;
    isCollapsed: boolean;
    toggleCollapsed: () => void;
  })[];
  fileName?: string;
  hasException?: boolean;
  caughtException?: Error;
  isPlaying?: boolean;
  pausedAt?: Call['id'];
  calls: Map<string, any>;
  endRef?: React.Ref<HTMLDivElement>;
  onScrollToEnd?: () => void;
}

const Container = styled.div<{ withException: boolean }>(({ theme, withException }) => ({
  minHeight: '100%',
  background: theme.background.content,
  ...(withException && {
    backgroundColor:
      theme.base === 'dark' ? transparentize(0.93, theme.color.negative) : theme.background.warning,
  }),
}));

const CaughtException = styled.div(({ theme }) => ({
  padding: 15,
  fontSize: theme.typography.size.s2 - 1,
  lineHeight: '19px',
}));
const CaughtExceptionCode = styled.code(({ theme }) => ({
  margin: '0 1px',
  padding: 3,
  fontSize: theme.typography.size.s1 - 1,
  lineHeight: 1,
  verticalAlign: 'top',
  background: 'rgba(0, 0, 0, 0.05)',
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 3,
}));
const CaughtExceptionTitle = styled.div({
  paddingBottom: 4,
  fontWeight: 'bold',
});
const CaughtExceptionDescription = styled.p({
  margin: 0,
  padding: '0 0 20px',
});
const CaughtExceptionStack = styled.pre(({ theme }) => ({
  margin: 0,
  padding: 0,
  fontSize: theme.typography.size.s1 - 1,
}));

export const InteractionsPanel: React.FC<InteractionsPanelProps> = React.memo(
  function InteractionsPanel({
    calls,
    controls,
    controlStates,
    interactions,
    fileName,
    hasException,
    caughtException,
    isPlaying,
    pausedAt,
    onScrollToEnd,
    endRef,
  }) {
    return (
      <Container withException={!!caughtException}>
        {(interactions.length > 0 || hasException) && (
          <Subnav
            controls={controls}
            controlStates={controlStates}
            status={
              // eslint-disable-next-line no-nested-ternary
              isPlaying ? CallStates.ACTIVE : hasException ? CallStates.ERROR : CallStates.DONE
            }
            storyFileName={fileName}
            onScrollToEnd={onScrollToEnd}
          />
        )}
        <div aria-label="Interactions list">
          {interactions.map((call) => (
            <Interaction
              key={call.id}
              call={call}
              callsById={calls}
              controls={controls}
              controlStates={controlStates}
              childCallIds={call.childCallIds}
              isHidden={call.isHidden}
              isCollapsed={call.isCollapsed}
              toggleCollapsed={call.toggleCollapsed}
              pausedAt={pausedAt}
            />
          ))}
        </div>
        {caughtException && !caughtException.message?.startsWith('ignoredException') && (
          <CaughtException>
            <CaughtExceptionTitle>
              Caught exception in <CaughtExceptionCode>play</CaughtExceptionCode> function
            </CaughtExceptionTitle>
            <CaughtExceptionDescription>
              This story threw an error after it finished rendering which means your interactions
              couldn&apos; t be run.Go to this story&apos; s play function in {fileName} to fix.
            </CaughtExceptionDescription>
            <CaughtExceptionStack data-chromatic="ignore">
              {caughtException.stack || `${caughtException.name}: ${caughtException.message}`}
            </CaughtExceptionStack>
          </CaughtException>
        )}
        <div ref={endRef} />
        {!isPlaying && !caughtException && interactions.length === 0 && (
          <Placeholder>
            No interactions found
            <Link
              href="https://storybook.js.org/docs/react/writing-stories/play-function"
              target="_blank"
              withArrow
            >
              Learn how to add interactions to your story
            </Link>
          </Placeholder>
        )}
      </Container>
    );
  }
);
