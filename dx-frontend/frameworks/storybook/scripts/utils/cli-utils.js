const { spawn } = require('child_process');
const { join } = require('path');
const { existsSync } = require('fs');

const logger = console;

const checkDependencies = async () => {
  const scriptsPath = join(__dirname, '..');
  const codePath = join(__dirname, '..', '..', 'code');

  const tasks = [];

  if (!existsSync(join(scriptsPath, 'node_modules'))) {
    tasks.push(
      spawn('yarn', ['install'], {
        cwd: scriptsPath,
        shell: true,
        stdio: ['inherit', 'inherit', 'inherit'],
      })
    );
  }
  if (!existsSync(join(codePath, 'node_modules'))) {
    tasks.push(
      spawn('yarn', ['install'], {
        cwd: codePath,
        shell: true,
        stdio: ['inherit', 'inherit', 'inherit'],
      })
    );
  }

  if (tasks.length > 0) {
    logger.log('installing dependencies');

    await Promise.all(
      tasks.map(
        (t) =>
          new Promise((res, rej) => {
            t.on('exit', (code) => {
              if (code !== 0) {
                rej();
              } else {
                res();
              }
            });
          })
      )
    ).catch(() => {
      tasks.forEach((t) => t.kill());
      throw new Error('Failed to install dependencies');
    });

    // give the filesystem some time
    await new Promise((res, rej) => {
      setTimeout(res, 1000);
    });
  }
};

module.exports = {
  checkDependencies,
};
