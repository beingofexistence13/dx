import { test, expect } from '@playwright/test';
import process from 'process';
import { SbPage } from './util';

const storybookUrl = process.env.STORYBOOK_URL || 'http://localhost:8001';

test.describe('addon-viewport', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storybookUrl);
    await new SbPage(page).waitUntilLoaded();
  });

  test('should have viewport button in the toolbar', async ({ page }) => {
    const sbPage = new SbPage(page);

    // Click on viewport button and select small mobile
    await sbPage.navigateToStory('example/button', 'primary');
    await sbPage.selectToolbar('[title="Change the size of the preview"]', '#list-item-mobile1');

    // Check that Button story is still displayed
    await expect(sbPage.previewRoot()).toContainText('Button');
  });

  test('iframe width should be changed when a mobile viewport is selected', async ({ page }) => {
    const sbPage = new SbPage(page);

    // Click on viewport button and select small mobile
    await sbPage.navigateToStory('example/button', 'primary');

    // Measure the original dimensions of previewRoot
    const originalDimensions = await sbPage.getCanvasBodyElement().boundingBox();
    await expect(originalDimensions?.width).toBeDefined();

    await sbPage.selectToolbar('[title="Change the size of the preview"]', '#list-item-mobile1');

    // Measure the adjusted dimensions of previewRoot after clicking the mobile item.
    const adjustedDimensions = await sbPage.getCanvasBodyElement().boundingBox();
    await expect(adjustedDimensions?.width).toBeDefined();

    // Compare the two widths
    await expect(adjustedDimensions?.width).not.toBe(originalDimensions?.width);
  });
});
