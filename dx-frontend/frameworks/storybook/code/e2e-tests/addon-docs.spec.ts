/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable no-await-in-loop */
import { test, expect } from '@playwright/test';
import process from 'process';
import dedent from 'ts-dedent';
import { SbPage } from './util';

const storybookUrl = process.env.STORYBOOK_URL || 'http://localhost:8001';
const templateName = process.env.STORYBOOK_TEMPLATE_NAME || '';

test.describe('addon-docs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storybookUrl);
    await new SbPage(page).waitUntilLoaded();
  });

  test('should show descriptions for stories', async ({ page }) => {
    const skipped = [
      // SSv6 does not render stories in the correct order in our sandboxes
      'internal\\/ssv6',
    ];
    test.skip(
      new RegExp(`^${skipped.join('|')}`, 'i').test(`${templateName}`),
      `Skipping ${templateName}, because of wrong ordering of stories on docs page`
    );

    const sbPage = new SbPage(page);
    await sbPage.navigateToStory('addons/docs/docspage/basic', 'docs');
    const root = sbPage.previewRoot();

    const basicStories = root.locator('#anchor--addons-docs-docspage-basic--basic');
    const secondBasicStory = (await basicStories.all())[1];
    await expect(secondBasicStory).toContainText('A basic button');

    const anotherStory = root.locator('#anchor--addons-docs-docspage-basic--another');
    await expect(anotherStory).toContainText('Another button, just to show multiple stories');
  });

  test('should show source=code view for stories', async ({ page }) => {
    const skipped = [
      // SSv6 does not render stories in the correct order in our sandboxes
      'internal\\/ssv6',
    ];
    test.skip(
      new RegExp(`^${skipped.join('|')}`, 'i').test(`${templateName}`),
      `Skipping ${templateName}, because of wrong ordering of stories on docs page`
    );

    const sbPage = new SbPage(page);
    await sbPage.navigateToStory('addons/docs/docspage/basic', 'docs');
    const root = sbPage.previewRoot();

    // Click on the third button which has the text "Show code"
    const showCodeButton = (await root.locator('button', { hasText: 'Show Code' }).all())[2];
    await showCodeButton.click();
    const sourceCode = root.locator('pre.prismjs');
    const expectedSource = dedent`{
      args: {
        label: 'Another'
      },
      parameters: {
        docs: {
          source: {
            type: 'code'
          }
        }
      },
      play: async () => {
        await new Promise(resolve => resolve('Play function'));
      }
    }`;
    await expect(sourceCode.textContent()).resolves.toContain(expectedSource);
  });

  test('should render errors', async ({ page }) => {
    const sbPage = new SbPage(page);
    await sbPage.navigateToStory('addons/docs/docspage/error', 'docs');
    const root = sbPage.previewRoot();

    const primaryStory = root.locator('#story--addons-docs-docspage-error--error-story--primary');
    await expect(primaryStory).toContainText('Story did something wrong');
  });

  test('should provide source snippet', async ({ page }) => {
    // templateName is e.g. 'vue-cli/default-js'
    test.skip(
      /^(vue3|vue-cli|preact)/i.test(`${templateName}`),
      `Skipping ${templateName}, which does not support dynamic source snippets`
    );

    const sbPage = new SbPage(page);
    await sbPage.navigateToStory('addons/docs/docspage/basic', 'docs');
    const root = sbPage.previewRoot();
    const toggles = root.locator('.docblock-code-toggle');

    const toggleCount = await toggles.count();
    for (let i = 0; i < toggleCount; i += 1) {
      const toggle = await toggles.nth(i);
      await toggle.click({ force: true });
    }

    const codes = root.locator('pre.prismjs');
    const codeCount = await codes.count();
    for (let i = 0; i < codeCount; i += 1) {
      const code = await codes.nth(i);
      const text = await code.innerText();
      await expect(text).not.toMatch(/^\(args\) => /);
    }
  });

  test('source snippet should not change in stories block', async ({ page }) => {
    const skipped = [
      'vue3',
      'vue-cli',
      'preact',
      // SSv6 does not render stories in the correct order in our sandboxes
      'internal\\/ssv6',
      // Angular bug: https://github.com/storybookjs/storybook/issues/21066
      'angular',
      // Lit seems to render incorrectly for our template-stories but not real stories
      //   - template: https://638db567ed97c3fb3e21cc22-ulhjwkqzzj.chromatic.com/?path=/docs/addons-docs-docspage-basic--docs
      //   - real: https://638db567ed97c3fb3e21cc22-ulhjwkqzzj.chromatic.com/?path=/docs/example-button--docs
      'lit-vite',
      // Vue doesn't update when you change args, apparently fixed by this:
      //   https://github.com/storybookjs/storybook/pull/20995
      'vue2-vite',
    ];
    test.skip(
      new RegExp(`^${skipped.join('|')}`, 'i').test(`${templateName}`),
      `Skipping ${templateName}, which does not support dynamic source snippets`
    );

    const sbPage = new SbPage(page);
    await sbPage.navigateToStory('addons/docs/docspage/basic', 'docs');
    const root = sbPage.previewRoot();
    const toggles = root.locator('.docblock-code-toggle');

    // Open up the first and second code toggle (i.e the "Basic" story outside and inside the Stories block)
    await (await toggles.nth(0)).click({ force: true });
    await (await toggles.nth(1)).click({ force: true });

    // Check they both say "Basic"
    const codes = root.locator('pre.prismjs');
    const primaryCode = await codes.nth(0);
    const storiesCode = await codes.nth(1);
    await expect(primaryCode).toContainText('Basic');
    await expect(storiesCode).toContainText('Basic');

    const labelControl = root.locator('textarea[name=label]');
    labelControl.fill('Changed');
    labelControl.blur();

    // Check the Primary one has changed
    await expect(primaryCode).toContainText('Changed');
    // Check the stories one still says "Basic"
    await expect(storiesCode).toContainText('Basic');
  });

  test('should not run autoplay stories without parameter', async ({ page }) => {
    const sbPage = new SbPage(page);
    await sbPage.navigateToStory('addons/docs/docspage/autoplay', 'docs');

    const root = sbPage.previewRoot();
    const autoplayPre = root.locator('#story--addons-docs-docspage-autoplay--autoplay pre');
    await expect(autoplayPre).toHaveText('Play has run');

    const noAutoplayPre = root.locator('#story--addons-docs-docspage-autoplay--no-autoplay pre');
    await expect(noAutoplayPre).toHaveText('Play has not run');
  });

  test('should order entries correctly', async ({ page }) => {
    // TODO: This is broken in SSV6 Webpack. Context: https://github.com/storybookjs/storybook/issues/20941
    test.skip(
      templateName.includes('ssv6-webpack'),
      `${templateName} fails because of a known issue: https://github.com/storybookjs/storybook/issues/20941`
    );

    const sbPage = new SbPage(page);
    await sbPage.navigateToStory('addons/docs/docspage/basic', 'docs');

    // The `<Primary>` block should render the "Basic" story, and the `<Stories/>` block should
    // render both the "Basic" and "Another" story
    const root = sbPage.previewRoot();
    const stories = root.locator('.sb-story button');

    await expect(await stories.count()).toBe(3);
    await expect(stories.first()).toHaveText('Basic');
    await expect(stories.nth(1)).toHaveText('Basic');
    await expect(stories.last()).toHaveText('Another');
  });
});
