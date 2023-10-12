import program from 'commander';
import { join } from 'path';
import { existsSync } from 'fs';
import * as tempy from 'tempy';
import { copy, emptyDir, readdir, remove, stat, writeFile } from 'fs-extra';
import { execaCommand } from '../utils/exec';

import { getTemplatesData, renderTemplate } from './utils/template';
// eslint-disable-next-line import/no-cycle
import { commitAllToGit } from './utils/git';
import { REPROS_DIRECTORY } from '../utils/constants';

export const logger = console;

interface PublishOptions {
  remote?: string;
  push?: boolean;
  branch?: string;
}

const publish = async (options: PublishOptions & { tmpFolder: string }) => {
  const { branch: inputBranch, remote, push, tmpFolder } = options;

  const scriptPath = __dirname;
  const branch = inputBranch || 'next';
  const templatesData = await getTemplatesData(branch === 'main' ? 'main' : 'next');

  logger.log(`👯‍♂️ Cloning the repository ${remote} in branch ${branch}`);
  await execaCommand(`git clone ${remote} .`, { cwd: tmpFolder });
  await execaCommand(`git checkout ${branch}`, { cwd: tmpFolder });

  // otherwise old files will stick around and result inconsistent states
  logger.log(`🗑 Delete existing template dirs from clone`);
  const files = await Promise.all(
    (
      await readdir(REPROS_DIRECTORY)
    ).map(async (f) => ({ path: f, stats: await stat(join(REPROS_DIRECTORY, f)) }))
  );
  await Promise.all(
    files
      .filter(({ stats, path }) => stats.isDirectory && !path.startsWith('.'))
      .map(async ({ path }) => emptyDir(join(tmpFolder, path)))
  );

  logger.log(`🚚 Moving template files into the repository`);

  const templatePath = join(scriptPath, 'templates', 'root.ejs');
  const templateData = { data: templatesData, version: branch === 'main' ? 'latest' : 'next' };

  const output = await renderTemplate(templatePath, templateData);

  await writeFile(join(tmpFolder, 'README.md'), output);

  logger.log(`🚛 Moving all the repros into the repository`);
  await copy(REPROS_DIRECTORY, tmpFolder);

  await commitAllToGit({ cwd: tmpFolder, branch });

  logger.info(`
     🙌 All the examples were bootstrapped:
        - in ${tmpFolder}
        - using the '${branch}' version of Storybook CLI
        - and committed on the '${branch}' branch of a local Git repository

     Also all the files in the 'templates' folder were copied at the root of the Git repository.
    `);

  if (push) {
    await execaCommand(`git push --set-upstream origin ${branch}`, {
      cwd: tmpFolder,
    });
    const remoteRepoUrl = `${remote.replace('.git', '')}/tree/${branch}`;
    logger.info(`🚀 Everything was pushed on ${remoteRepoUrl}`);
  } else {
    logger.info(`
       To publish these examples you just need to:
          - push the branch: 'git push --set-upstream origin ${branch}
      `);
  }
};

program
  .description('Create a sandbox from a set of possible templates')
  .option('--remote <remote>', 'Choose the remote to push the contents to')
  .option('--branch <branch>', 'Choose which branch on the remote')
  .option('--push', 'Whether to push the contents to the remote', false)
  .option('--force-push', 'Whether to force push the changes into the repros repository', false);

program.parse(process.argv);

if (!existsSync(REPROS_DIRECTORY)) {
  throw Error("Couldn't find sandbox directory. Did you forget to run generate-sandboxes?");
}

const tmpFolder = tempy.directory();
logger.log(`⏱ Created tmp folder: ${tmpFolder}`);

const options = program.opts() as PublishOptions;

publish({ ...options, tmpFolder }).catch(async (e) => {
  logger.error(e);

  if (existsSync(tmpFolder)) {
    logger.log('🚮 Removing the temporary folder..');
    await remove(tmpFolder);
  }
  process.exit(1);
});
