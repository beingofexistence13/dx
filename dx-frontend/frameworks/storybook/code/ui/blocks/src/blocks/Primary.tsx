import type { FC } from 'react';
import React, { useContext } from 'react';
import dedent from 'ts-dedent';
import { deprecate } from '@storybook/client-logger';

import { DocsContext } from './DocsContext';
import { DocsStory } from './DocsStory';

interface PrimaryProps {
  /**
   * @deprecated Primary block should only be used to render the primary story, which is automatically found.
   */
  name?: string;
}

export const Primary: FC<PrimaryProps> = ({ name }) => {
  const docsContext = useContext(DocsContext);
  if (name) {
    deprecate(dedent`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
  }
  const storyId = name && docsContext.storyIdByName(name);
  const story = docsContext.storyById(storyId);
  return story ? (
    <DocsStory of={story.moduleExport} expanded={false} __primary withToolbar />
  ) : null;
};
