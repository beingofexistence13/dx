#!/usr/bin/env node
// import { add } from "@/src/commands/add"
// import { diff } from "@/src/commands/diff"
// import { init } from "@/src/commands/init"
// import { Command } from "commander"

// import { getPackageInfo } from "./utils/get-package-info"

// process.on("SIGINT", () => process.exit(0))
// process.on("SIGTERM", () => process.exit(0))

// async function main() {
//   const packageInfo = await getPackageInfo()

//   const program = new Command()
//     .name("beingofexistence-dx")
//     .description("add components and dependencies to your project")
//     .version(
//       packageInfo.version || "1.0.0",
//       "-v, --version",
//       "display the version number"
//     )

//   program.addCommand(init).addCommand(add).addCommand(diff)

//   program.parse()
// }

// main()

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
import stringWidth from 'string-width';


chalkAnimation.rainbow('Make Bulk Files By Using Any Kind Json,Excel,Spreedsheet,Csv or any kind Of Database!!!');





