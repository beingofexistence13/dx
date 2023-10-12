/* eslint-disable no-underscore-dangle */
const mod = jest.createMockFromModule('simple-git');

mod.__getRemotes = jest
  .fn()
  .mockReturnValue([{ name: 'origin', refs: { fetch: 'origin', push: 'origin' } }]);
mod.__fetch = jest.fn();
mod.__revparse = jest.fn().mockResolvedValue('mockedGitCommitHash');

mod.simpleGit = () => {
  return {
    getRemotes: mod.__getRemotes,
    fetch: mod.__fetch,
    revparse: mod.__revparse,
  };
};

module.exports = mod;
