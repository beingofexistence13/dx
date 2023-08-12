#!/usr/bin/env node
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
import nanospinner, { createSpinner } from 'nanospinner';
import ora from 'ora';
import prompts from 'prompts';
import { Command } from 'commander';
import stringWidth from 'string-width';

let spinner,ms=500;
const sleep = (ms: Number) => new Promise((r) => setTimeout(r, ms));

async function welcome() {

    const rainbowTittle = chalkAnimation.rainbow('Make Bulk Files By Using Any Kind Json,Excel,Spreedsheet,Csv or any kind Of Database!!!');
    await sleep(200)
    rainbowTittle.stop();

}
async function fileTypeSuccess() {

    const rainbowFileTypeProcceed = chalkAnimation.rainbow('Stay tuned cause the proccess will start soon!!!');
    rainbowFileTypeProcceed.stop();

}
async function askFileType() {

    await sleep(1000);
    const type = await inquirer.prompt({
        name: 'file_type',
        type: 'list',
        message: 'What is your file type',
        choices: [
            'Typescipt or Javascript(config files)',
            'Json',
            'Excel',
            'Spreedsheet',
            'Database',
        ],
    })
    return handleFileType(type.file_type)

}
async function handleFileType(type:any) {

    spinner = createSpinner(`Checking...`).start();
    await sleep(1000);

    if (type == 'Typescipt or Javascript(config files)') {
        return spinner.success({text:`${chalk.bgGreen(`Typescipt or Javascript config file type is available`)}`})
    }
    if (type = 'Json') {
        return spinner.success({text:`${chalk.bgGreen('Json config file type is available')}`});
    }
    else{
        return spinner.error({text: 'This file type is not supported yet.So, please try another one'})
        process.exit(1);
    }
}
async function askPath() {

    await sleep(500);

    let path = await inquirer.prompt({
        name: 'file_path',
        type: 'input',
        message: '\n Where is your dataset located',
        default() {
            return 'location';
        }
    })
    let filePath = path.file_path;

}

welcome();
askFileType();
fileTypeSuccess();
askPath();


