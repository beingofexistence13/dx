import React from 'react';
import { HighlightStyles } from './HighlightStyles';
import { LeafNodeStyleWrapper } from './Tree';

import { ComponentNode, DocumentNode, GroupNode, StoryNode } from './TreeNode';

export default {
  title: 'Sidebar/TreeNode',
  parameters: { layout: 'fullscreen', withSymbols: true },
  component: StoryNode,
};

export const Types = () => (
  <>
    <ComponentNode>Component</ComponentNode>
    <GroupNode>Group</GroupNode>
    <StoryNode>Story</StoryNode>
    <DocumentNode docsMode={false}>Document</DocumentNode>
  </>
);

export const Expandable = () => (
  <>
    <ComponentNode isExpandable>Collapsed component</ComponentNode>
    <ComponentNode isExpandable isExpanded>
      Expanded component
    </ComponentNode>
    <GroupNode isExpandable>Collapsed group</GroupNode>
    <GroupNode isExpandable isExpanded>
      Expanded group
    </GroupNode>
  </>
);

export const Nested = () => (
  <>
    <DocumentNode docsMode={false} depth={0}>
      Zero
    </DocumentNode>
    <GroupNode isExpandable isExpanded depth={0}>
      Zero
    </GroupNode>
    <GroupNode isExpandable isExpanded depth={1}>
      One
    </GroupNode>
    <StoryNode depth={2}>Two</StoryNode>
    <ComponentNode isExpandable isExpanded depth={2}>
      Two
    </ComponentNode>
    <StoryNode depth={3}>Three</StoryNode>
  </>
);

export const Selection = () => (
  <>
    <HighlightStyles refId="foo" itemId="bar" />
    <LeafNodeStyleWrapper
      data-ref-id="baz"
      data-item-id="bar"
      data-nodetype="story"
      data-selected="false"
      className="sidebar-item"
    >
      <StoryNode>Default story</StoryNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper
      data-ref-id="baz"
      data-item-id="bar"
      data-nodetype="story"
      data-selected="true"
      className="sidebar-item"
    >
      <StoryNode>Selected story</StoryNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper
      data-ref-id="foo"
      data-item-id="bar"
      data-nodetype="story"
      data-selected="false"
      className="sidebar-item"
    >
      <StoryNode>Highlighted story</StoryNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper
      data-ref-id="foo"
      data-item-id="bar"
      data-nodetype="story"
      data-selected="true"
      className="sidebar-item"
    >
      <StoryNode>Highlighted + Selected story</StoryNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper
      data-ref-id="foo"
      data-item-id="baz"
      data-nodetype="group"
      data-selected="false"
      className="sidebar-item"
    >
      <GroupNode>Default group</GroupNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper
      data-ref-id="foo"
      data-item-id="bar"
      data-nodetype="group"
      data-selected="false"
      className="sidebar-item"
    >
      <GroupNode>Highlighted group</GroupNode>
    </LeafNodeStyleWrapper>
  </>
);
