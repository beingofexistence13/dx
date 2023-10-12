import prompts from 'prompts';
import path from 'path';
import chalk from 'chalk';
import boxen from 'boxen';
import { dedent } from 'ts-dedent';
import { downloadTemplate } from 'giget';

import { existsSync, readdir } from 'fs-extra';
import type { Template, TemplateKey } from './sandbox-templates';
import { allTemplates as TEMPLATES } from './sandbox-templates';

const logger = console;

interface SandboxOptions {
  filterValue?: string;
  output?: string;
  branch?: string;
  init?: boolean;
}
type Choice = keyof typeof TEMPLATES;

const toChoices = (c: Choice): prompts.Choice => ({ title: TEMPLATES[c].name, value: c });

export const sandbox = async ({
  output: outputDirectory,
  filterValue,
  branch,
  init,
}: SandboxOptions) => {
  // Either get a direct match when users pass a template id, or filter through all templates
  let selectedConfig: Template | undefined = TEMPLATES[filterValue as TemplateKey];
  let selectedTemplate: Choice | null = selectedConfig ? (filterValue as TemplateKey) : null;

  if (!selectedConfig) {
    const filterRegex = new RegExp(`^${filterValue || ''}`, 'i');

    const keys = Object.keys(TEMPLATES) as Choice[];
    // get value from template and reduce through TEMPLATES to filter out the correct template
    const choices = keys.reduce<Choice[]>((acc, group) => {
      const current = TEMPLATES[group];

      if (!filterValue) {
        acc.push(group);
        return acc;
      }

      if (
        current.name.match(filterRegex) ||
        group.match(filterRegex) ||
        current.expected.builder.match(filterRegex) ||
        current.expected.framework.match(filterRegex) ||
        current.expected.renderer.match(filterRegex)
      ) {
        acc.push(group);
        return acc;
      }

      return acc;
    }, []);

    if (choices.length === 0) {
      logger.info(
        boxen(
          dedent`
            🔎 You filtered out all templates. 🔍

            After filtering all the templates with "${chalk.yellow(
              filterValue
            )}", we found no results. Please try again with a different filter.

            Available templates:
            ${keys.map((key) => chalk.blue`- ${key}`).join('\n')}
            `.trim(),
          { borderStyle: 'round', padding: 1, borderColor: '#F1618C' } as any
        )
      );
      process.exit(1);
    }

    if (choices.length === 1) {
      [selectedTemplate] = choices;
    } else {
      logger.info(
        boxen(
          dedent`
            🤗 Welcome to ${chalk.yellow('sb sandbox')}! 🤗

            Create a ${chalk.green('new project')} to minimally reproduce Storybook issues.

            1. select an environment that most closely matches your project setup.
            2. select a location for the reproduction, outside of your project.

            After the reproduction is ready, we'll guide you through the next steps.
            `.trim(),
          { borderStyle: 'round', padding: 1, borderColor: '#F1618C' } as any
        )
      );

      selectedTemplate = await promptSelectedTemplate(choices);
    }

    const hasSelectedTemplate = !!(selectedTemplate ?? null);
    if (!hasSelectedTemplate) {
      logger.error('Somehow we got no templates. Please rerun this command!');
      return;
    }

    selectedConfig = TEMPLATES[selectedTemplate];

    if (!selectedConfig) {
      throw new Error('🚨 Sandbox: please specify a valid template type');
    }
  }

  let selectedDirectory = outputDirectory;
  const outputDirectoryName = outputDirectory || selectedTemplate;
  if (selectedDirectory && existsSync(`${selectedDirectory}`)) {
    logger.info(`⚠️  ${selectedDirectory} already exists! Overwriting...`);
  }

  if (!selectedDirectory) {
    const { directory } = await prompts(
      {
        type: 'text',
        message: 'Enter the output directory',
        name: 'directory',
        initial: outputDirectoryName,
        validate: async (directoryName) =>
          existsSync(directoryName)
            ? `${directoryName} already exists. Please choose another name.`
            : true,
      },
      {
        onCancel: () => {
          logger.log('Command cancelled by the user. Exiting...');
          process.exit(1);
        },
      }
    );
    selectedDirectory = directory;
  }

  try {
    const templateDestination = path.isAbsolute(selectedDirectory)
      ? selectedDirectory
      : path.join(process.cwd(), selectedDirectory);

    logger.info(`🏃 Adding ${selectedConfig.name} into ${templateDestination}`);

    logger.log('📦 Downloading sandbox template...');
    try {
      const templateType = init ? 'after-storybook' : 'before-storybook';
      // Download the sandbox based on subfolder "after-storybook" and selected branch
      const gitPath = `github:storybookjs/sandboxes/${selectedTemplate}/${templateType}#${branch}`;
      await downloadTemplate(gitPath, {
        force: true,
        dir: templateDestination,
      });
      // throw an error if templateDestination is an empty directory using fs-extra
      if ((await readdir(templateDestination)).length === 0) {
        throw new Error(
          dedent`Template downloaded from ${chalk.blue(gitPath)} is empty.
          Are you use it exists? Or did you want to set ${chalk.yellow(
            selectedTemplate
          )} to inDevelopment first?`
        );
      }
    } catch (err) {
      logger.error(`🚨 Failed to download sandbox template: ${err.message}`);
      throw err;
    }

    const initMessage = init
      ? chalk.yellow(`yarn install\nyarn storybook`)
      : `Recreate your setup, then ${chalk.yellow(`npx storybook@latest init`)}`;

    logger.info(
      boxen(
        dedent`
        🎉 Your Storybook reproduction project is ready to use! 🎉

        ${chalk.yellow(`cd ${selectedDirectory}`)}
        ${initMessage}

        Once you've recreated the problem you're experiencing, please:

        1. Document any additional steps in ${chalk.cyan('README.md')}
        2. Publish the repository to github
        3. Link to the repro repository in your issue

        Having a clean repro helps us solve your issue faster! 🙏
      `.trim(),
        { borderStyle: 'round', padding: 1, borderColor: '#F1618C' } as any
      )
    );
  } catch (error) {
    logger.error('🚨 Failed to create sandbox');
    throw error;
  }
};

async function promptSelectedTemplate(choices: Choice[]): Promise<Choice | null> {
  const { template } = await prompts(
    {
      type: 'select',
      message: '🌈 Select the template',
      name: 'template',
      choices: choices.map(toChoices),
    },
    {
      onCancel: () => {
        logger.log('Command cancelled by the user. Exiting...');
        process.exit(1);
      },
    }
  );

  return template || null;
}
