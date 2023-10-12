import chalk from 'chalk';
import boxen from 'boxen';
import { frameworkPackages, rendererPackages } from '@storybook/core-common';
import dedent from 'ts-dedent';
import type { FixSummary } from '../types';
import { FixStatus } from '../types';
import { hasMultipleVersions } from './hasMultipleVersions';
import type { InstallationMetadata } from '../../js-package-manager/types';

const messageDivider = '\n\n';
const segmentDivider = '\n\n─────────────────────────────────────────────────\n\n';

function getGlossaryMessages(
  fixSummary: FixSummary,
  fixResults: Record<string, FixStatus>,
  logFile: string
) {
  const messages = [];
  if (fixSummary.succeeded.length > 0) {
    messages.push(chalk.bold('Successful migrations:'));
    messages.push(fixSummary.succeeded.map((m) => chalk.green(m)).join(', '));
  }

  if (Object.keys(fixSummary.failed).length > 0) {
    messages.push(chalk.bold('Failed migrations:'));
    messages.push(
      Object.entries(fixSummary.failed)
        .map(([id, error]) => {
          return `${chalk.redBright(id)}:\n${error}`;
        })
        .join('\n')
    );
    messages.push(`You can find the full logs in ${chalk.cyan(logFile)}`);
  }

  if (fixSummary.manual.length > 0) {
    messages.push(chalk.bold('Manual migrations:'));
    messages.push(
      fixSummary.manual
        .map((m) => (fixResults[m] === FixStatus.MANUAL_SUCCEEDED ? chalk.green(m) : chalk.blue(m)))
        .join(', ')
    );
  }

  if (fixSummary.skipped.length > 0) {
    messages.push(chalk.bold('Skipped migrations:'));
    messages.push(fixSummary.skipped.map((m) => chalk.cyan(m)).join(', '));
  }

  return messages;
}

export function getMigrationSummary({
  fixResults,
  fixSummary,
  logFile,
  installationMetadata,
}: {
  fixResults: Record<string, FixStatus>;
  fixSummary: FixSummary;
  installationMetadata: InstallationMetadata;
  logFile?: string;
}) {
  const messages = [];
  messages.push(getGlossaryMessages(fixSummary, fixResults, logFile).join(messageDivider));

  messages.push(dedent`If you'd like to run the migrations again, you can do so by running '${chalk.cyan(
    'npx storybook@next automigrate'
  )}'
    
    The automigrations try to migrate common patterns in your project, but might not contain everything needed to migrate to the latest version of Storybook.
    
    Please check the changelog and migration guide for manual migrations and more information: ${chalk.yellow(
      'https://storybook.js.org/migration-guides/7.0'
    )}
    And reach out on Discord if you need help: ${chalk.yellow('https://discord.gg/storybook')}
  `);

  if (
    installationMetadata?.duplicatedDependencies &&
    Object.keys(installationMetadata.duplicatedDependencies).length > 0
  ) {
    messages.push(getWarnings(installationMetadata).join(messageDivider));
  }

  const hasNoFixes = Object.values(fixResults).every((r) => r === FixStatus.UNNECESSARY);
  const hasFailures = Object.values(fixResults).some(
    (r) => r === FixStatus.FAILED || r === FixStatus.CHECK_FAILED
  );

  // eslint-disable-next-line no-nested-ternary
  const title = hasNoFixes
    ? 'No migrations were applicable to your project'
    : hasFailures
    ? 'Migration check ran with failures'
    : 'Migration check ran successfully';

  return boxen(messages.filter(Boolean).join(segmentDivider), {
    borderStyle: 'round',
    padding: 1,
    title,
    borderColor: hasFailures ? 'red' : 'green',
  });
}

// These packages are aliased by Storybook, so it doesn't matter if they're duplicated
const allowList = [
  '@storybook/csf',
  // see this file for more info: code/lib/preview/src/globals/types.ts
  '@storybook/addons',
  '@storybook/channel-postmessage', // @deprecated: remove in 8.0
  '@storybook/channel-websocket', // @deprecated: remove in 8.0
  '@storybook/channels',
  '@storybook/client-api',
  '@storybook/client-logger',
  '@storybook/core-client',
  '@storybook/core-events',
  '@storybook/preview-web',
  '@storybook/preview-api',
  '@storybook/store',

  // see this file for more info: code/ui/manager/src/globals/types.ts
  '@storybook/components',
  '@storybook/router',
  '@storybook/theming',
  '@storybook/api', // @deprecated: remove in 8.0
  '@storybook/manager-api',
];

// These packages definitely will cause issues if they're duplicated
const disallowList = [
  Object.keys(rendererPackages),
  Object.keys(frameworkPackages),
  '@storybook/instrumenter',
];

function getWarnings(installationMetadata: InstallationMetadata) {
  const messages = [];

  const { critical, trivial } = Object.entries(
    installationMetadata?.duplicatedDependencies
  ).reduce<{
    critical: string[];
    trivial: string[];
  }>(
    (acc, [dep, versions]) => {
      if (allowList.includes(dep)) {
        return acc;
      }

      const hasMultipleMajorVersions = hasMultipleVersions(versions);

      if (disallowList.includes(dep) && hasMultipleMajorVersions) {
        acc.critical.push(`${chalk.redBright(dep)}:\n${versions.join(', ')}`);
      } else {
        acc.trivial.push(`${chalk.hex('#ff9800')(dep)}:\n${versions.join(', ')}`);
      }

      return acc;
    },
    { critical: [], trivial: [] }
  );

  if (critical.length > 0) {
    messages.push(
      `${chalk.bold(
        'Critical:'
      )} The following dependencies are duplicated and WILL cause unexpected behavior:`
    );
    messages.push(critical.join(messageDivider));
  }

  if (trivial.length > 0) {
    messages.push(
      `${chalk.bold(
        'Attention:'
      )} The following dependencies are duplicated which might cause unexpected behavior:`
    );
    messages.push(trivial.join(messageDivider));
  }

  messages.push(
    `You can find more information for a given dependency by running ${chalk.cyan(
      `${installationMetadata.infoCommand} <package-name>`
    )}`
  );
  messages.push(
    `Please try de-duplicating these dependencies by running ${chalk.cyan(
      `${installationMetadata.dedupeCommand}`
    )}`
  );

  return messages;
}
