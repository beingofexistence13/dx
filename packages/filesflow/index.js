import argparse from 'argparse';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import cliui from 'cliui';
import figlet from 'figlet';
import gradientString from 'gradient-string';
import hasFlag from 'has-flag';
import inquirer from 'inquirer';
import logSymbols from 'log-symbols';
import meow from 'meow';
import nanospinner from 'nanospinner';
import ora from 'ora';
import prompts from 'prompts';
import { Command } from 'commander';
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

// program.parse();

import stringWidth from 'string-width';


chalkAnimation.rainbow('Lorem ipsum dolor sit amet');


