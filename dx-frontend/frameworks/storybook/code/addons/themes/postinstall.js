const { spawn } = require('child_process');

const PACKAGE_MANAGER_TO_COMMAND = {
  npm: 'npx',
  yarn1: 'npx',
  yarn2: 'yarn dlx',
  pnpm: 'pnpm dlx',
};

module.exports = function postinstall(options) {
  const command = PACKAGE_MANAGER_TO_COMMAND[options.packageManager];

  spawn(command, ['@storybook/auto-config', 'themes'], {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
};
