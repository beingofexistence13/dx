import { styled } from '@storybook/theming';
import { Icons } from '@storybook/components';
import { global } from '@storybook/global';
import type { FC, MouseEventHandler, ReactNode } from 'react';
import React, { useCallback, useEffect } from 'react';
import type { ControllerStateAndHelpers } from 'downshift';

import { useStorybookApi } from '@storybook/manager-api';
import { PRELOAD_ENTRIES } from '@storybook/core-events';
import { ComponentNode, DocumentNode, Path, RootNode, StoryNode } from './TreeNode';
import type { Match, DownshiftItem, SearchResult } from './types';
import { isCloseType, isClearType, isExpandType } from './types';
// eslint-disable-next-line import/no-cycle
import { getLink } from '../../utils/tree';
import { matchesKeyCode, matchesModifiers } from '../../keybinding';
import { statusMapping } from '../../utils/status';

const { document } = global;

const ResultsList = styled.ol({
  listStyle: 'none',
  margin: 0,
  marginLeft: -20,
  marginRight: -20,
  padding: 0,
});

const ResultRow = styled.li<{ isHighlighted: boolean }>(({ theme, isHighlighted }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
  paddingRight: 20,
  background: isHighlighted ? theme.background.hoverable : 'transparent',
  cursor: 'pointer',
  'a:hover, button:hover': {
    background: 'transparent',
  },
  gap: 10,
}));

const NoResults = styled.div(({ theme }) => ({
  marginTop: 20,
  textAlign: 'center',
  fontSize: `${theme.typography.size.s2 - 1}px`,
  lineHeight: `18px`,
  color: theme.color.defaultText,
  small: {
    color: theme.barTextColor,
    fontSize: `${theme.typography.size.s1}px`,
  },
}));

const Mark = styled.mark(({ theme }) => ({
  background: 'transparent',
  color: theme.color.secondary,
}));

const ActionRow = styled(ResultRow)({
  display: 'flex',
  padding: '6px 19px',
  alignItems: 'center',
});

const BackActionRow = styled(ActionRow)({
  marginTop: 8,
});

const ActionLabel = styled.span(({ theme }) => ({
  flexGrow: 1,
  color: theme.textMutedColor,
  fontSize: `${theme.typography.size.s1}px`,
}));

const ActionIcon = styled(Icons)(({ theme }) => ({
  display: 'inline-block',
  width: 10,
  height: 10,
  marginRight: 6,
  color: theme.textMutedColor,
}));

const ActionKey = styled.code(({ theme }) => ({
  minWidth: 16,
  height: 16,
  lineHeight: '16px',
  textAlign: 'center',
  fontSize: '11px',
  background: theme.base === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
  color: theme.base === 'light' ? theme.color.dark : theme.textMutedColor,
  borderRadius: 2,
  userSelect: 'none',
  pointerEvents: 'none',
}));

const Highlight: FC<{ match?: Match }> = React.memo(function Highlight({ children, match }) {
  if (!match) return <>{children}</>;
  const { value, indices } = match;
  const { nodes: result } = indices.reduce<{ cursor: number; nodes: ReactNode[] }>(
    ({ cursor, nodes }, [start, end], index, { length }) => {
      /* eslint-disable react/no-array-index-key */
      nodes.push(<span key={`${index}-0`}>{value.slice(cursor, start)}</span>);
      nodes.push(<Mark key={`${index}-1`}>{value.slice(start, end + 1)}</Mark>);
      if (index === length - 1) {
        nodes.push(<span key={`${index}-2`}>{value.slice(end + 1)}</span>);
      }
      /* eslint-enable react/no-array-index-key */
      return { cursor: end + 1, nodes };
    },
    { cursor: 0, nodes: [] }
  );
  return <>{result}</>;
});

const Result: FC<
  SearchResult & {
    icon: string;
    isHighlighted: boolean;
    onClick: MouseEventHandler;
  }
> = React.memo(function Result({ item, matches, icon, onClick, ...props }) {
  const click: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      onClick(event);
    },
    [onClick]
  );

  const api = useStorybookApi();
  useEffect(() => {
    if (api && props.isHighlighted && item.isComponent) {
      api.emit(
        PRELOAD_ENTRIES,
        // @ts-expect-error (TODO)
        { ids: [item.isLeaf ? item.id : item.children[0]] },
        { options: { target: item.refId } }
      );
    }
  }, [props.isHighlighted, item]);

  const nameMatch = matches.find((match: Match) => match.key === 'name');
  const pathMatches = matches.filter((match: Match) => match.key === 'path');
  const label = (
    <div className="search-result-item--label">
      <strong>
        <Highlight match={nameMatch}>{item.name}</Highlight>
      </strong>
      <Path>
        {item.path.map((group, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index}>
            <Highlight match={pathMatches.find((match: Match) => match.arrayIndex === index)}>
              {group}
            </Highlight>
          </span>
        ))}
      </Path>
    </div>
  );
  const title = `${item.path.join(' / ')} / ${item.name}`;

  const nodeProps = { depth: 0, onClick: click, title, children: label };
  let node;
  if (item.type === 'component') {
    node = <ComponentNode isExpanded={false} {...nodeProps} />;
  } else if (item.type === 'story') {
    node = <StoryNode href={getLink(item, item.refId)} {...nodeProps} />;
  } else {
    // @ts-expect-error (TODO)
    node = <DocumentNode href={getLink(item, item.refId)} {...nodeProps} />;
  }

  const [i] = item.status ? statusMapping[item.status] : [];

  return (
    <ResultRow {...props}>
      {node}
      {item.status ? i : null}
    </ResultRow>
  );
});

export const SearchResults: FC<{
  query: string;
  results: DownshiftItem[];
  closeMenu: (cb?: () => void) => void;
  getMenuProps: ControllerStateAndHelpers<DownshiftItem>['getMenuProps'];
  getItemProps: ControllerStateAndHelpers<DownshiftItem>['getItemProps'];
  highlightedIndex: number | null;
  isLoading?: boolean;
  enableShortcuts?: boolean;
}> = React.memo(function SearchResults({
  query,
  results,
  closeMenu,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  isLoading = false,
  enableShortcuts = true,
}) {
  const api = useStorybookApi();
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!enableShortcuts || isLoading || event.repeat) return;
      if (matchesModifiers(false, event) && matchesKeyCode('Escape', event)) {
        const target = event.target as Element;
        if (target?.id === 'storybook-explorer-searchfield') return; // handled by downshift
        event.preventDefault();
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeMenu, enableShortcuts, isLoading]);

  const mouseOverHandler = useCallback((event: MouseEvent) => {
    if (!api) {
      return;
    }
    const currentTarget = event.currentTarget as HTMLElement;
    const storyId = currentTarget.getAttribute('data-id');
    const refId = currentTarget.getAttribute('data-refid');
    const item = api.getData(storyId, refId === 'storybook_internal' ? undefined : refId);

    if (item?.isComponent) {
      api.emit(PRELOAD_ENTRIES, {
        // @ts-expect-error (TODO)
        ids: [item.isLeaf ? item.id : item.children[0]],
        options: { target: refId },
      });
    }
  }, []);

  return (
    <ResultsList {...getMenuProps()}>
      {results.length > 0 && !query && (
        <li>
          <RootNode className="search-result-recentlyOpened">Recently opened</RootNode>
        </li>
      )}
      {results.length === 0 && query && (
        <li>
          <NoResults>
            <strong>No components found</strong>
            <br />
            <small>Find components by name or path.</small>
          </NoResults>
        </li>
      )}
      {results.map((result: DownshiftItem, index) => {
        if (isCloseType(result)) {
          return (
            <BackActionRow
              key="search-result-back"
              {...result}
              {...getItemProps({ key: index, index, item: result })}
              isHighlighted={highlightedIndex === index}
              className="search-result-back"
            >
              <ActionIcon icon="arrowleft" />
              <ActionLabel>Back to components</ActionLabel>
              <ActionKey>ESC</ActionKey>
            </BackActionRow>
          );
        }
        if (isClearType(result)) {
          return (
            <ActionRow
              key="search-result-clearHistory"
              {...result}
              {...getItemProps({ key: index, index, item: result })}
              isHighlighted={highlightedIndex === index}
              className="search-result-clearHistory"
            >
              <ActionIcon icon="trash" />
              <ActionLabel>Clear history</ActionLabel>
            </ActionRow>
          );
        }
        if (isExpandType(result)) {
          return (
            <ActionRow
              key="search-result-more"
              {...result}
              {...getItemProps({ key: index, index, item: result })}
              isHighlighted={highlightedIndex === index}
              className="search-result-more"
            >
              <ActionIcon icon="plus" />
              <ActionLabel>Show {result.moreCount} more results</ActionLabel>
            </ActionRow>
          );
        }

        const { item } = result;
        const key = `${item.refId}::${item.id}`;
        return (
          <Result
            key={item.id}
            {...result}
            {...getItemProps({ key, index, item: result })}
            isHighlighted={highlightedIndex === index}
            data-id={result.item.id}
            data-refid={result.item.refId}
            onMouseOver={mouseOverHandler}
            className="search-result-item"
          />
        );
      })}
    </ResultsList>
  );
});
