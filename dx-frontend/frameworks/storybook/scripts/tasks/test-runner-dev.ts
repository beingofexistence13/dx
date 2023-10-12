import { testRunnerBuild as testRunnerProd } from './test-runner-build';
import { PORT } from './dev';

export const testRunnerDev: typeof testRunnerProd = {
  ...testRunnerProd,
  port: PORT,
  description: 'Run the test runner against a sandbox in dev mode',
  dependsOn: ['dev'],
};
