import detectFreePort from 'detect-port';

import { CODE_DIRECTORY } from '../utils/constants';
import { exec } from '../utils/exec';
import type { Task } from '../task';

export async function runRegistry({ dryRun, debug }: { dryRun?: boolean; debug?: boolean }) {
  const controller = new AbortController();

  exec(
    'yarn local-registry --open',
    { cwd: CODE_DIRECTORY, env: { CI: 'true' } },
    { dryRun, debug, signal: controller.signal }
  ).catch((err) => {
    // If aborted, we want to make sure the rejection is handled.
    if (!err.killed) throw err;
  });
  await exec('yarn wait-on http://localhost:6001', { cwd: CODE_DIRECTORY }, { dryRun, debug });

  return controller;
}

const REGISTRY_PORT = 6001;
export const runRegistryTask: Task = {
  description: 'Run the internal npm server',
  service: true,
  dependsOn: ['publish'],
  async ready() {
    return (await detectFreePort(REGISTRY_PORT)) !== REGISTRY_PORT;
  },
  async run(_, options) {
    return runRegistry(options);
  },
};
