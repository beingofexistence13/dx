import AxePuppeteer from '@axe-core/puppeteer';
import type { AxeConfig } from './config';
import { defaultAxeConfig } from './config';
import { puppeteerTest } from './puppeteerTest';

export const axeTest = (customConfig: Partial<AxeConfig> = {}) => {
  const extendedConfig = { ...defaultAxeConfig, ...customConfig };
  const { beforeAxeTest } = extendedConfig;

  return puppeteerTest({
    ...extendedConfig,
    async testBody(page, testOptions) {
      const {
        element = '#storybook-root',
        exclude,
        disabledRules,
        options,
        config,
      } = testOptions.context.parameters.a11y || {};
      await beforeAxeTest(page, options);
      const axe = new AxePuppeteer(page);
      axe.include(element);

      if (exclude) {
        axe.exclude(exclude);
      }

      if (options) {
        axe.options(options);
      }

      if (disabledRules) {
        axe.disableRules(disabledRules);
      }

      if (config) {
        axe.configure(config);
      }

      const { violations } = await axe.analyze();

      expect(violations).toHaveLength(0);
    },
  });
};
