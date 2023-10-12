import { test, expect } from '@playwright/test';
import process from 'process';
import { SbPage } from './util';

const storybookUrl = process.env.STORYBOOK_URL || 'http://localhost:8001';

test.describe('addon-actions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storybookUrl);
    await new SbPage(page).waitUntilLoaded();
  });

  test('should trigger an action', async ({ page }) => {
    const sbPage = new SbPage(page);

    await sbPage.navigateToStory('example/button', 'primary');
    const root = sbPage.previewRoot();
    const button = root.locator('button', { hasText: 'Button' });
    await button.click();

    await sbPage.viewAddonPanel('Actions');
    const logItem = await page.locator('#storybook-panel-root #panel-tab-content', {
      hasText: 'click',
    });
    await expect(logItem).toBeVisible();
  });
});
