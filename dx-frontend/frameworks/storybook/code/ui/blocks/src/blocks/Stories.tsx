import type { FC } from 'react';
import React, { useContext } from 'react';
import { styled } from '@storybook/theming';
import { DocsContext } from './DocsContext';
import { DocsStory } from './DocsStory';
import { Heading } from './Heading';

interface StoriesProps {
  title?: JSX.Element | string;
  includePrimary?: boolean;
}

const StyledHeading: typeof Heading = styled(Heading)(({ theme }) => ({
  fontSize: `${theme.typography.size.s2 - 1}px`,
  fontWeight: theme.typography.weight.bold,
  lineHeight: '16px',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  color: theme.textMutedColor,
  border: 0,
  marginBottom: '12px',

  '&:first-of-type': {
    // specificity issue
    marginTop: '56px',
  },
}));

export const Stories: FC<StoriesProps> = ({ title, includePrimary = true }) => {
  const { componentStories } = useContext(DocsContext);

  let stories = componentStories().filter((story) => !story.parameters?.docs?.disable);

  if (!includePrimary) stories = stories.slice(1);

  if (!stories || stories.length === 0) {
    return null;
  }
  return (
    <>
      <StyledHeading>{title}</StyledHeading>
      {stories.map(
        (story) =>
          story && <DocsStory key={story.id} of={story.moduleExport} expanded __forceInitialArgs />
      )}
    </>
  );
};

Stories.defaultProps = {
  title: 'Stories',
};
