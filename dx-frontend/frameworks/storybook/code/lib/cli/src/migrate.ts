import { listCodemods, runCodemod } from '@storybook/codemod';
import { runFixes } from './automigrate';
import { bareMdxStoriesGlob } from './automigrate/fixes/bare-mdx-stories-glob';
import { JsPackageManagerFactory } from './js-package-manager';
import { getStorybookVersionSpecifier } from './helpers';

const logger = console;

export async function migrate(migration: any, { glob, dryRun, list, rename, parser }: any) {
  if (list) {
    listCodemods().forEach((key: any) => logger.log(key));
  } else if (migration) {
    if (migration === 'mdx-to-csf' && !dryRun) {
      await runFixes({ fixes: [bareMdxStoriesGlob] });
      await addStorybookBlocksPackage();
    }
    await runCodemod(migration, { glob, dryRun, logger, rename, parser });
  } else {
    throw new Error('Migrate: please specify a migration name or --list');
  }
}

export async function addStorybookBlocksPackage() {
  const packageManager = JsPackageManagerFactory.getPackageManager();
  const packageJson = await packageManager.retrievePackageJson();
  const versionToInstall = getStorybookVersionSpecifier(await packageManager.retrievePackageJson());
  logger.info(`✅ Adding "@storybook/blocks" package`);
  await packageManager.addDependencies({ installAsDevDependencies: true, packageJson }, [
    `@storybook/blocks@${versionToInstall}`,
  ]);
}
