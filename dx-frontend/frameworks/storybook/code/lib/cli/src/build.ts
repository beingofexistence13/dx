import { sync as readUpSync } from 'read-pkg-up';
import { buildStaticStandalone, withTelemetry } from '@storybook/core-server';
import { cache } from '@storybook/core-common';

export const build = async (cliOptions: any) => {
  const options = {
    ...cliOptions,
    configDir: cliOptions.configDir || './.storybook',
    outputDir: cliOptions.outputDir || './storybook-static',
    ignorePreview: !!cliOptions.previewUrl && !cliOptions.forceBuildPreview,
    configType: 'PRODUCTION',
    cache,
    packageJson: readUpSync({ cwd: __dirname }).packageJson,
  };
  await withTelemetry('build', { cliOptions, presetOptions: options }, () =>
    buildStaticStandalone(options)
  );
};
