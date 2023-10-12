import { test, expect } from '@playwright/test';
import process from 'process';
import { SbPage } from './util';

const storybookUrl = process.env.STORYBOOK_URL || 'http://localhost:8001';

test.describe('manager', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storybookUrl);

    await new SbPage(page).waitUntilLoaded();
  });

  test('shortcuts sidebar', async ({ page }) => {
    const sbPage = new SbPage(page);

    await expect(sbPage.page.locator('.sidebar-container')).toBeVisible();

    await sbPage.page.locator('html').press('s');
    await expect(sbPage.page.locator('.sidebar-container')).not.toBeVisible();

    await sbPage.page.locator('[aria-label="Show sidebar"]').click();
    await expect(sbPage.page.locator('.sidebar-container')).toBeVisible();

    await sbPage.page.locator('[aria-label="Shortcuts"]').click();
    await sbPage.page.locator('#list-item-S').click();

    await expect(sbPage.page.locator('.sidebar-container')).not.toBeVisible();

    await sbPage.page.locator('html').press('s');
    await expect(sbPage.page.locator('.sidebar-container')).toBeVisible();
  });

  test('shortcuts toolbar', async ({ page }) => {
    const sbPage = new SbPage(page);
    const isToolbarShown = async () => {
      const canvas = await sbPage.page.locator('div', {
        has: sbPage.page.locator('> #storybook-preview-wrapper'),
      });

      return (await canvas.getAttribute('offset')) === '40';
    };

    await expect(await isToolbarShown()).toBeTruthy();

    await sbPage.page.locator('html').press('t');
    await expect(await isToolbarShown()).toBeFalsy();

    await sbPage.page.locator('[aria-label="Shortcuts"]').click();
    await sbPage.page.locator('#list-item-T').click();
    await expect(await isToolbarShown()).toBeTruthy();
  });

  test('shortcuts panel', async ({ page }) => {
    const sbPage = new SbPage(page);
    const isPanelsShown = async () => {
      const main = await sbPage.page.locator('div', {
        has: sbPage.page.locator('> * > #storybook-preview-wrapper'),
      });

      const style = await main.getAttribute('style');
      return style;
    };

    await sbPage.navigateToStory('example/button', 'primary');
    await expect(await isPanelsShown()).toBeTruthy();

    await sbPage.page.locator('html').press('a');
    await expect(await isPanelsShown()).toBeFalsy();

    await sbPage.page.locator('[aria-label="Shortcuts"]').click();
    await sbPage.page.locator('#list-item-A').click();
    await expect(await isPanelsShown()).toBeTruthy();

    await sbPage.page.locator('html').press('a');
    await expect(await isPanelsShown()).toBeFalsy();

    await sbPage.page.locator('html').press('a');
    await sbPage.page.locator('[aria-label="Shortcuts"]').click();
    await sbPage.page.locator('#list-item-D').click();
    await expect(await isPanelsShown()).toBeTruthy();
  });

  test('settings page', async ({ page }) => {
    const sbPage = new SbPage(page);
    await sbPage.page.locator('[aria-label="Shortcuts"]').click();
    await sbPage.page.locator('#list-item-about').click();

    await expect(sbPage.page.url()).toContain('/settings/about');

    await sbPage.page.locator('[title="Close settings page"]').click();
    await expect(sbPage.page.url()).not.toContain('/settings/about');
  });
});
