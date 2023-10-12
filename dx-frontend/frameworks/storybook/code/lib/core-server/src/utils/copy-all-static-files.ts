import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { logger } from '@storybook/node-logger';
import { getDirectoryFromWorkingDir } from '@storybook/core-common';
import { parseStaticDir } from './server-statics';

export async function copyAllStaticFiles(staticDirs: any[] | undefined, outputDir: string) {
  if (staticDirs && staticDirs.length > 0) {
    await Promise.all(
      staticDirs.map(async (dir) => {
        try {
          const { staticDir, staticPath, targetDir } = await parseStaticDir(dir);
          const targetPath = path.join(outputDir, targetDir);
          logger.info(chalk`=> Copying static files: {cyan ${staticDir}} => {cyan ${targetDir}}`);

          // Storybook's own files should not be overwritten, so we skip such files if we find them
          const skipPaths = ['index.html', 'iframe.html'].map((f) => path.join(targetPath, f));
          await fs.copy(staticPath, targetPath, {
            dereference: true,
            preserveTimestamps: true,
            filter: (_, dest) => !skipPaths.includes(dest),
          });
        } catch (e) {
          if (e instanceof Error) logger.error(e.message);
          process.exit(-1);
        }
      })
    );
  }
}

export async function copyAllStaticFilesRelativeToMain(
  staticDirs: any[] | undefined,
  outputDir: string,
  configDir: string
) {
  const workingDir = process.cwd();

  return staticDirs?.reduce(async (acc, dir) => {
    await acc;

    const staticDirAndTarget = typeof dir === 'string' ? dir : `${dir.from}:${dir.to}`;
    const { staticPath: from, targetEndpoint: to } = await parseStaticDir(
      getDirectoryFromWorkingDir({
        configDir,
        workingDir,
        directory: staticDirAndTarget,
      })
    );

    const targetPath = path.join(outputDir, to);
    const skipPaths = ['index.html', 'iframe.html'].map((f) => path.join(targetPath, f));
    logger.info(chalk`=> Copying static files: {cyan ${from}} at {cyan ${targetPath}}`);
    await fs.copy(from, targetPath, {
      dereference: true,
      preserveTimestamps: true,
      filter: (_, dest) => !skipPaths.includes(dest),
    });
  }, Promise.resolve());
}
