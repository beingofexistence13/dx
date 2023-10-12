import { global } from '@storybook/global';
import { addons, mockChannel } from '@storybook/preview-api';
import ensureOptionsDefaults from './ensureOptionsDefaults';
import snapshotsTests from './snapshotsTestsTemplate';
import integrityTest from './integrityTestTemplate';
import loadFramework from '../frameworks/frameworkLoader';
import type { StoryshotsOptions } from './StoryshotsOptions';

const { describe, window: globalWindow } = global;

type TestMethod = 'beforeAll' | 'beforeEach' | 'afterEach' | 'afterAll';
const methods: TestMethod[] = ['beforeAll', 'beforeEach', 'afterEach', 'afterAll'];

function callTestMethodGlobals(
  testMethod: { [key in TestMethod]?: Function & { timeout?: number } } & { [key in string]: any }
) {
  methods.forEach((method) => {
    if (typeof testMethod[method] === 'function') {
      // @ts-expect-error (ignore)
      global[method](testMethod[method], testMethod[method].timeout);
    }
  });
}

const isDisabled = (parameter: any) =>
  parameter === false || (parameter && parameter.disable === true);
function testStorySnapshots(options: StoryshotsOptions = {}) {
  if (typeof describe !== 'function') {
    throw new Error('testStorySnapshots is intended only to be used inside jest');
  }

  addons.setChannel(mockChannel());

  const { storybook, framework, renderTree, renderShallowTree } = loadFramework(options);
  const {
    asyncJest,
    suite,
    storyNameRegex,
    storyKindRegex,
    stories2snapsConverter,
    testMethod,
    integrityOptions,
    snapshotSerializers,
  } = ensureOptionsDefaults(options);
  const testMethodParams = {
    renderTree,
    renderShallowTree,
    stories2snapsConverter,
  };

  // NOTE: as the store + preview's initialization process entirely uses
  // `SychronousPromise`s in the v6 store case, the callback to the `then()` here
  // will run *immediately* (in the same tick), and thus the `snapshotsTests`, and
  // subsequent calls to `it()` etc will all happen within this tick, which is required
  // by Jest (cannot add tests asynchronously)
  globalWindow.__STORYBOOK_STORY_STORE__.initializationPromise.then(() => {
    const data = storybook.raw()?.reduce(
      (acc, item) => {
        if (storyNameRegex && !item.name.match(storyNameRegex)) {
          return acc;
        }

        if (storyKindRegex && !item.kind.match(storyKindRegex)) {
          return acc;
        }

        const { kind, storyFn: render, parameters } = item;
        const existing = acc.find((i: any) => i.kind === kind);
        const { fileName } = item.parameters;

        if (!isDisabled(parameters.storyshots)) {
          if (existing) {
            existing.children.push({ ...item, render, fileName });
          } else {
            acc.push({
              kind,
              children: [{ ...item, render, fileName }],
            });
          }
        }
        return acc;
      },
      [] as {
        kind: string;
        children: any[];
      }[]
    );

    if (data && data.length) {
      callTestMethodGlobals(testMethod);

      snapshotsTests({
        data,
        asyncJest,
        suite,
        framework,
        testMethod,
        testMethodParams,
        snapshotSerializers,
      });

      integrityTest(integrityOptions, stories2snapsConverter);
    } else {
      throw new Error('storyshots found 0 stories');
    }
  });
}

export default testStorySnapshots;
