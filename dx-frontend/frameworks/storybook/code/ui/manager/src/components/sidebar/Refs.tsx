import type { FC, MutableRefObject } from 'react';
import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import type { State } from '@storybook/manager-api';
import { useStorybookApi, useStorybookState } from '@storybook/manager-api';
import { styled } from '@storybook/theming';
import { transparentize } from 'polished';

import { AuthBlock, ErrorBlock, LoaderBlock, EmptyBlock } from './RefBlocks';

import { RefIndicator } from './RefIndicator';

// eslint-disable-next-line import/no-cycle
import { Tree } from './Tree';
import { CollapseIcon } from './TreeNode';

import { DEFAULT_REF_ID } from './Sidebar';
import type { Highlight, RefType } from './types';

import { getStateType } from '../../utils/tree';

export interface RefProps {
  isLoading: boolean;
  isBrowsing: boolean;
  selectedStoryId: string | null;
  highlightedRef: MutableRefObject<Highlight>;
  setHighlighted: (highlight: Highlight) => void;
}

const Wrapper = styled.div<{ isMain: boolean }>(({ isMain }) => ({
  position: 'relative',
  marginLeft: -20,
  marginRight: -20,
  marginTop: isMain ? undefined : 0,
}));

const RefHead = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2 - 1,

  // Similar to ListItem.tsx
  textDecoration: 'none',
  lineHeight: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'transparent',

  width: '100%',
  marginTop: 20,
  paddingTop: 16,
  borderTop: `1px solid ${theme.appBorderColor}`,

  color:
    theme.base === 'light' ? theme.color.defaultText : transparentize(0.2, theme.color.defaultText),
}));

const RefTitle = styled.span(({ theme }) => ({
  display: 'block',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
  overflow: 'hidden',
  marginLeft: 2,
}));

const CollapseButton = styled.button(({ theme }) => ({
  // Reset button
  background: 'transparent',
  border: '1px solid transparent',
  borderRadius: 26,
  outline: 'none',
  boxSizing: 'content-box',
  cursor: 'pointer',
  position: 'relative',
  textAlign: 'left',
  lineHeight: 'normal',
  font: 'inherit',
  color: 'inherit',

  display: 'flex',
  padding: 3,
  paddingLeft: 1,
  paddingRight: 12,
  margin: 0,
  marginLeft: -20,
  overflow: 'hidden',

  'span:first-of-type': {
    marginTop: 5,
  },

  '&:focus': {
    borderColor: theme.color.secondary,
    'span:first-of-type': {
      borderLeftColor: theme.color.secondary,
    },
  },
}));

export const Ref: FC<RefType & RefProps & { status?: State['status'] }> = React.memo(function Ref(
  props
) {
  const { docsOptions } = useStorybookState();
  const api = useStorybookApi();
  const {
    index,
    id: refId,
    title = refId,
    isLoading: isLoadingMain,
    isBrowsing,
    selectedStoryId,
    highlightedRef,
    setHighlighted,
    loginUrl,
    type,
    expanded = true,
    indexError,
    previewInitialized,
  } = props;
  const length = useMemo(() => (index ? Object.keys(index).length : 0), [index]);
  const indicatorRef = useRef<HTMLElement>(null);

  const isMain = refId === DEFAULT_REF_ID;
  const isLoadingInjected =
    (type === 'auto-inject' && !previewInitialized) || type === 'server-checked';
  const isLoading = isLoadingMain || isLoadingInjected || type === 'unknown';
  const isError = !!indexError;
  const isEmpty = !isLoading && length === 0;
  const isAuthRequired = !!loginUrl && length === 0;

  const state = getStateType(isLoading, isAuthRequired, isError, isEmpty);
  const [isExpanded, setExpanded] = useState<boolean>(expanded);

  useEffect(() => {
    if (index && selectedStoryId && index[selectedStoryId]) {
      setExpanded(true);
    }
  }, [setExpanded, index, selectedStoryId]);

  const handleClick = useCallback(() => setExpanded((value) => !value), [setExpanded]);

  const setHighlightedItemId = useCallback(
    (itemId: string) => setHighlighted({ itemId, refId }),
    [setHighlighted]
  );

  const onSelectStoryId = useCallback(
    (storyId: string) => api && api.selectStory(storyId, undefined, { ref: !isMain && refId }),
    [api, isMain, refId]
  );

  return (
    <>
      {isMain || (
        <RefHead
          aria-label={`${isExpanded ? 'Hide' : 'Show'} ${title} stories`}
          aria-expanded={isExpanded}
        >
          <CollapseButton data-action="collapse-ref" onClick={handleClick}>
            <CollapseIcon isExpanded={isExpanded} />
            <RefTitle title={title}>{title}</RefTitle>
          </CollapseButton>
          <RefIndicator {...props} state={state} ref={indicatorRef} />
        </RefHead>
      )}
      {isExpanded && (
        <Wrapper data-title={title} isMain={isMain}>
          {state === 'auth' && <AuthBlock id={refId} loginUrl={loginUrl} />}
          {state === 'error' && <ErrorBlock error={indexError} />}
          {state === 'loading' && <LoaderBlock isMain={isMain} />}
          {state === 'empty' && <EmptyBlock isMain={isMain} />}
          {state === 'ready' && (
            <Tree
              status={props.status}
              isBrowsing={isBrowsing}
              isMain={isMain}
              refId={refId}
              data={index}
              docsMode={docsOptions.docsMode}
              selectedStoryId={selectedStoryId}
              onSelectStoryId={onSelectStoryId}
              highlightedRef={highlightedRef}
              setHighlightedItemId={setHighlightedItemId}
            />
          )}
        </Wrapper>
      )}
    </>
  );
});
