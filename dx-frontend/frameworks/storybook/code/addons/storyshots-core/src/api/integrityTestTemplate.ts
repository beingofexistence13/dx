/* eslint-disable jest/no-export */
import fs from 'fs';
import { globSync } from 'glob';
import { global } from '@storybook/global';
import { dedent } from 'ts-dedent';

const { describe, it } = global;

expect.extend({
  notToBeAbandoned(storyshots, stories2snapsConverter) {
    const abandonedStoryshots = storyshots.filter((fileName: string) => {
      const possibleStoriesFiles = stories2snapsConverter.getPossibleStoriesFiles(fileName);
      return !possibleStoriesFiles.some(fs.existsSync);
    });

    if (abandonedStoryshots.length === 0) {
      return { pass: true, message: () => '' };
    }

    const formattedList = abandonedStoryshots.join('\n  ');

    // See https://github.com/facebook/jest/issues/8732#issuecomment-516445064
    // eslint-disable-next-line no-underscore-dangle
    const isUpdate = expect.getState().snapshotState._updateSnapshot === 'all';
    if (isUpdate) {
      abandonedStoryshots.forEach((file: string) => fs.unlinkSync(file));
      // eslint-disable-next-line no-console
      console.log(dedent`
        Removed abandoned storyshots:
          ${formattedList}
      `);
      return { pass: true, message: () => '' };
    }

    return {
      pass: false,
      message: () => dedent`
          Found abandoned storyshots. Run jest with -u to remove them:
            ${formattedList}
        `,
    };
  },
});

function integrityTest(integrityOptions: any, stories2snapsConverter: any) {
  if (integrityOptions === false) {
    return;
  }

  describe('Storyshots Integrity', () => {
    it('Abandoned Storyshots', () => {
      const snapshotExtension = stories2snapsConverter.getSnapshotExtension();
      const storyshots = globSync(`**/*${snapshotExtension}`, integrityOptions);

      // @ts-expect-error (ts doesn't 'get' the extension happening on line 9)
      expect(storyshots).notToBeAbandoned(stories2snapsConverter);
    });
  });
}

export default integrityTest;
