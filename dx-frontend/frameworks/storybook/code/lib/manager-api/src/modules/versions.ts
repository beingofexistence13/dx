import { global } from '@storybook/global';
import semver from 'semver';
import memoize from 'memoizerific';

import type { API_UnknownEntries, API_Version, API_Versions } from '@storybook/types';
import { version as currentVersion } from '../version';

import type { ModuleFn } from '../lib/types';

const { VERSIONCHECK } = global;

export interface SubState {
  versions: API_Versions & API_UnknownEntries;
  lastVersionCheck: number;
  dismissedVersionNotification: undefined | string;
}

const getVersionCheckData = memoize(1)((): API_Versions => {
  try {
    return { ...(JSON.parse(VERSIONCHECK).data || {}) };
  } catch (e) {
    return {};
  }
});

export interface SubAPI {
  /**
   * Returns the current version of the Storybook Manager.
   *
   * @returns {API_Version} The current version of the Storybook Manager.
   */
  getCurrentVersion: () => API_Version;
  /**
   * Returns the latest version of the Storybook Manager.
   *
   * @returns {API_Version} The latest version of the Storybook Manager.
   */
  getLatestVersion: () => API_Version;
  /**
   * Checks if an update is available for the Storybook Manager.
   *
   * @returns {boolean} True if an update is available, false otherwise.
   */
  versionUpdateAvailable: () => boolean;
}

export const init: ModuleFn = ({ store }) => {
  const { dismissedVersionNotification } = store.getState();

  const state = {
    versions: {
      current: {
        version: currentVersion,
      },
      ...getVersionCheckData(),
    },
    dismissedVersionNotification,
  };

  const api: SubAPI = {
    getCurrentVersion: () => {
      const {
        versions: { current },
      } = store.getState();
      return current;
    },
    getLatestVersion: () => {
      const {
        versions: { latest, next, current },
      } = store.getState();
      if (current && semver.prerelease(current.version) && next) {
        return latest && semver.gt(latest.version, next.version) ? latest : next;
      }
      return latest;
    },
    versionUpdateAvailable: () => {
      const latest = api.getLatestVersion();
      const current = api.getCurrentVersion();

      if (latest) {
        if (!latest.version) {
          return true;
        }
        if (!current.version) {
          return true;
        }

        const onPrerelease = !!semver.prerelease(current.version);

        const actualCurrent = onPrerelease
          ? `${semver.major(current.version)}.${semver.minor(current.version)}.${semver.patch(
              current.version
            )}`
          : current.version;

        const diff = semver.diff(actualCurrent, latest.version);

        return (
          semver.gt(latest.version, actualCurrent) && diff !== 'patch' && !diff.includes('pre')
        );
      }
      return false;
    },
  };

  // Grab versions from the server/local storage right away
  const initModule = async () => {
    const { versions = {} } = store.getState();

    const { latest, next } = getVersionCheckData();

    await store.setState({
      versions: { ...versions, latest, next },
    });
  };

  return { init: initModule, state, api };
};
