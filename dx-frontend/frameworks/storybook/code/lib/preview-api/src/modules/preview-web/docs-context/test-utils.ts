import type { CSFFile, PreparedStory } from '@storybook/types';

export function csfFileParts() {
  // These compose the raw exports of the CSF file
  const component = {};
  const metaExport = { component };
  const storyExport = {};
  const moduleExports = { default: metaExport, story: storyExport };

  // This is the prepared story + CSF file after SB has processed them
  const storyAnnotations = {
    id: 'meta--story',
    moduleExport: storyExport,
  } as CSFFile['stories'][string];
  const story = { id: 'meta--story', moduleExport: storyExport } as PreparedStory;
  const meta = { id: 'meta', title: 'Meta', component, moduleExports } as CSFFile['meta'];
  const csfFile = {
    stories: { 'meta--story': storyAnnotations },
    meta,
    moduleExports,
  } as CSFFile;

  return {
    component,
    metaExport,
    storyExport,
    moduleExports,
    storyAnnotations,
    story,
    meta,
    csfFile,
  };
}
