/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import path from 'path';
import dedent from 'ts-dedent';
import { run as writeChangelog } from '../write-changelog';
import * as changesUtils from '../utils/get-changes';

// eslint-disable-next-line jest/no-mocks-import
jest.mock('fs-extra', () => require('../../../code/__mocks__/fs-extra'));
const fsExtra = require('fs-extra');

const getChangesMock = jest.spyOn(changesUtils, 'getChanges');

jest.spyOn(console, 'log').mockImplementation(() => {});
jest.spyOn(console, 'warn').mockImplementation(() => {});
jest.spyOn(console, 'error').mockImplementation(() => {});

const STABLE_CHANGELOG_PATH = path.join(__dirname, '..', '..', '..', 'CHANGELOG.md');
const PRERELEASE_CHANGELOG_PATH = path.join(__dirname, '..', '..', '..', 'CHANGELOG.prerelease.md');
const LATEST_VERSION_PATH = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'docs',
  'versions',
  'latest.json'
);
const NEXT_VERSION_PATH = path.join(__dirname, '..', '..', '..', 'docs', 'versions', 'next.json');

beforeEach(() => {
  jest.clearAllMocks();
});

const EXISTING_STABLE_CHANGELOG = dedent`## 7.0.0

- Core: Some change`;

const EXISTING_PRERELEASE_CHANGELOG = dedent`## 7.1.0-alpha.20

- CLI: Super fast now`;

fsExtra.__setMockFiles({
  [STABLE_CHANGELOG_PATH]: EXISTING_STABLE_CHANGELOG,
  [PRERELEASE_CHANGELOG_PATH]: EXISTING_PRERELEASE_CHANGELOG,
});

describe('Write changelog', () => {
  it('should write to stable changelogs and version files in docs', async () => {
    getChangesMock.mockResolvedValue({
      changes: [],
      changelogText: `## 7.0.1

- React: Make it reactive
- CLI: Not UI`,
    });

    await writeChangelog(['7.0.1'], {});

    expect(fsExtra.writeFile).toHaveBeenCalledTimes(1);
    expect(fsExtra.writeFile.mock.calls[0][0]).toBe(STABLE_CHANGELOG_PATH);
    expect(fsExtra.writeFile.mock.calls[0][1]).toMatchInlineSnapshot(`
      "## 7.0.1

      - React: Make it reactive
      - CLI: Not UI

      ## 7.0.0

      - Core: Some change"
    `);
    expect(fsExtra.writeJson).toBeCalledTimes(1);
    expect(fsExtra.writeJson.mock.calls[0][0]).toBe(LATEST_VERSION_PATH);
    expect(fsExtra.writeJson.mock.calls[0][1]).toMatchInlineSnapshot(`
      {
        "info": {
          "plain": "- React: Make it reactive
      - CLI: Not UI",
        },
        "version": "7.0.1",
      }
    `);
  });

  it('should escape double quotes for json files', async () => {
    getChangesMock.mockResolvedValue({
      changes: [],
      changelogText: `## 7.0.1

- React: Make it reactive
- Revert "CLI: Not UI"
- CLI: Not UI`,
    });

    await writeChangelog(['7.0.1'], {});

    expect(fsExtra.writeFile).toHaveBeenCalledTimes(1);
    expect(fsExtra.writeFile.mock.calls[0][0]).toBe(STABLE_CHANGELOG_PATH);
    expect(fsExtra.writeFile.mock.calls[0][1]).toMatchInlineSnapshot(`
      "## 7.0.1

      - React: Make it reactive
      - Revert "CLI: Not UI"
      - CLI: Not UI

      ## 7.0.0

      - Core: Some change"
    `);
    expect(fsExtra.writeJson).toBeCalledTimes(1);
    expect(fsExtra.writeJson.mock.calls[0][0]).toBe(LATEST_VERSION_PATH);
    expect(fsExtra.writeJson.mock.calls[0][1]).toMatchInlineSnapshot(`
      {
        "info": {
          "plain": "- React: Make it reactive
      - Revert \\"CLI: Not UI\\"
      - CLI: Not UI",
        },
        "version": "7.0.1",
      }
    `);
  });

  it('should write to prerelase changelogs and version files in docs', async () => {
    getChangesMock.mockResolvedValue({
      changes: [],
      changelogText: `## 7.1.0-alpha.21

- React: Make it reactive
- CLI: Not UI`,
    });

    await writeChangelog(['7.1.0-alpha.21'], {});

    expect(fsExtra.writeFile).toHaveBeenCalledTimes(1);
    expect(fsExtra.writeFile.mock.calls[0][0]).toBe(PRERELEASE_CHANGELOG_PATH);
    expect(fsExtra.writeFile.mock.calls[0][1]).toMatchInlineSnapshot(`
      "## 7.1.0-alpha.21

      - React: Make it reactive
      - CLI: Not UI

      ## 7.1.0-alpha.20

      - CLI: Super fast now"
    `);
    expect(fsExtra.writeJson).toBeCalledTimes(1);
    expect(fsExtra.writeJson.mock.calls[0][0]).toBe(NEXT_VERSION_PATH);
    expect(fsExtra.writeJson.mock.calls[0][1]).toMatchInlineSnapshot(`
      {
        "info": {
          "plain": "- React: Make it reactive
      - CLI: Not UI",
        },
        "version": "7.1.0-alpha.21",
      }
    `);
  });
});
