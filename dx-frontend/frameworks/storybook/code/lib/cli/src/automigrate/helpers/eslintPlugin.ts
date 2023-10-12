import fse, { readFile, readJson, writeJson } from 'fs-extra';

import { dedent } from 'ts-dedent';
import detectIndent from 'detect-indent';
import { readConfig, writeConfig } from '@storybook/csf-tools';
import prompts from 'prompts';
import chalk from 'chalk';
import type { JsPackageManager } from '../../js-package-manager';
import { paddedLog } from '../../helpers';

export const SUPPORTED_ESLINT_EXTENSIONS = ['js', 'cjs', 'json'];
const UNSUPPORTED_ESLINT_EXTENSIONS = ['yaml', 'yml'];

export const findEslintFile = () => {
  const filePrefix = '.eslintrc';
  const unsupportedExtension = UNSUPPORTED_ESLINT_EXTENSIONS.find((ext: string) =>
    fse.existsSync(`${filePrefix}.${ext}`)
  );

  if (unsupportedExtension) {
    throw new Error(unsupportedExtension);
  }

  const extension = SUPPORTED_ESLINT_EXTENSIONS.find((ext: string) =>
    fse.existsSync(`${filePrefix}.${ext}`)
  );
  return extension ? `${filePrefix}.${extension}` : null;
};

export async function extractEslintInfo(packageManager: JsPackageManager): Promise<{
  hasEslint: boolean;
  isStorybookPluginInstalled: boolean;
  eslintConfigFile: string | null;
}> {
  const allDependencies = await packageManager.getAllDependencies();
  const packageJson = await packageManager.retrievePackageJson();
  let eslintConfigFile: string | null = null;

  try {
    eslintConfigFile = findEslintFile();
  } catch (err) {
    //
  }

  const isStorybookPluginInstalled = !!allDependencies['eslint-plugin-storybook'];
  const hasEslint = allDependencies.eslint || eslintConfigFile || packageJson.eslintConfig;
  return { hasEslint, isStorybookPluginInstalled, eslintConfigFile };
}

export async function configureEslintPlugin(eslintFile: string, packageManager: JsPackageManager) {
  if (eslintFile) {
    paddedLog(`Configuring Storybook ESLint plugin at ${eslintFile}`);
    if (eslintFile.endsWith('json')) {
      const eslintConfig = (await readJson(eslintFile)) as { extends?: string[] };
      const existingConfigValue = Array.isArray(eslintConfig.extends)
        ? eslintConfig.extends
        : [eslintConfig.extends].filter(Boolean);
      eslintConfig.extends = [...(existingConfigValue || []), 'plugin:storybook/recommended'];

      const eslintFileContents = await readFile(eslintFile, 'utf8');
      const spaces = detectIndent(eslintFileContents).amount || 2;
      await writeJson(eslintFile, eslintConfig, { spaces });
    } else {
      const eslint = await readConfig(eslintFile);
      const extendsConfig = eslint.getFieldValue(['extends']) || [];
      const existingConfigValue = Array.isArray(extendsConfig)
        ? extendsConfig
        : [extendsConfig].filter(Boolean);
      eslint.setFieldValue(
        ['extends'],
        [...(existingConfigValue || []), 'plugin:storybook/recommended']
      );

      await writeConfig(eslint);
    }
  } else {
    paddedLog(`Configuring eslint-plugin-storybook in your package.json`);
    const packageJson = await packageManager.retrievePackageJson();
    await packageManager.writePackageJson({
      ...packageJson,
      eslintConfig: {
        ...packageJson.eslintConfig,
        extends: [...(packageJson.eslintConfig?.extends || []), 'plugin:storybook/recommended'],
      },
    });
  }
}

export const suggestESLintPlugin = async (): Promise<boolean> => {
  const { shouldInstall } = await prompts({
    type: 'confirm',
    name: 'shouldInstall',
    message: dedent`
        We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: ${chalk.yellow(
          'https://github.com/storybookjs/eslint-plugin-storybook#readme'
        )}

        Would you like to install it?
      `,
    initial: true,
  });

  return shouldInstall;
};
