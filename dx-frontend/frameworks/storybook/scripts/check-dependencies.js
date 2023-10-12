#!/usr/bin/env node
const { checkDependencies } = require('./utils/cli-utils');

checkDependencies().catch((e) => {
  console.error(e);
  process.exit(1);
});
