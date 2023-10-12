import { isCorePackage } from './utils';

describe('UTILS', () => {
  describe.each([
    ['@storybook/react', true],
    ['@storybook/node-logger', true],
    ['@storybook/addon-info', true],
    ['@storybook/something-random', true],
    ['@storybook/preset-create-react-app', false],
    ['@storybook/linter-config', false],
    ['@storybook/design-system', false],
    ['@storybook/addon-styling', false],
    ['@storybook/addon-styling-webpack', false],
    ['@nx/storybook', false],
    ['@nrwl/storybook', false],
  ])('isCorePackage', (input, output) => {
    it(`It should return "${output}" when given "${input}"`, () => {
      expect(isCorePackage(input)).toEqual(output);
    });
  });
});
