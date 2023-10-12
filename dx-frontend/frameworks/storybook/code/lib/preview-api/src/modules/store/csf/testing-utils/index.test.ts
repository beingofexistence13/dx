import { composeStory, composeStories } from './index';

// Most integration tests for this functionality are located under renderers/react
describe('composeStory', () => {
  const meta = {
    title: 'Button',
    parameters: {
      firstAddon: true,
    },
    args: {
      label: 'Hello World',
      primary: true,
    },
  };

  test('should return story with composed args and parameters', () => {
    const Story = () => {};
    Story.args = { primary: true };
    Story.parameters = {
      parameters: {
        secondAddon: true,
      },
    };

    const composedStory = composeStory(Story, meta);
    expect(composedStory.args).toEqual({ ...Story.args, ...meta.args });
    expect(composedStory.parameters).toEqual(
      expect.objectContaining({ ...Story.parameters, ...meta.parameters })
    );
  });

  test('should throw an error if Story is undefined', () => {
    expect(() => {
      // @ts-expect-error (invalid input)
      composeStory(undefined, meta);
    }).toThrow();
  });
});

describe('composeStories', () => {
  test('should call composeStoryFn with stories', () => {
    const composeConfigFn = jest.fn((v) => v);
    const module = {
      default: {
        title: 'Button',
      },
      StoryOne: () => {},
      StoryTwo: () => {},
    };
    const globalConfig = {};
    composeStories(module, globalConfig, composeConfigFn);
    expect(composeConfigFn).toHaveBeenCalledWith(
      module.StoryOne,
      module.default,
      globalConfig,
      'StoryOne'
    );
    expect(composeConfigFn).toHaveBeenCalledWith(
      module.StoryTwo,
      module.default,
      globalConfig,
      'StoryTwo'
    );
  });

  test('should not call composeStoryFn for non-story exports', () => {
    const composeConfigFn = jest.fn((v) => v);
    const module = {
      default: {
        title: 'Button',
        excludeStories: /Data/,
      },
      mockData: {},
    };
    composeStories(module, {}, composeConfigFn);
    expect(composeConfigFn).not.toHaveBeenCalled();
  });
});
