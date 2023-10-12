/* eslint-disable @typescript-eslint/no-shadow,no-restricted-syntax */
import { transformSync } from '@babel/core';
import glob from 'fast-glob';
import fs from 'node:fs';
import * as recast from 'recast';

import type Babel from '@babel/core';
import type { File } from '@babel/types';
import * as t from '@babel/types';
import invariant from 'tiny-invariant';

const files = glob.sync('**/*.ts.mdx', {
  absolute: true,
  cwd: '../docs/snippets/react',
});

for (const [, file] of files.entries()) {
  const markdown = fs.readFileSync(file, 'utf-8');
  const code = markdown
    .split('\n')
    .filter((it) => !it.startsWith('```'))
    .join('\n');

  try {
    const result = transformSync(code, {
      babelrc: false,
      configFile: false,
      filename: `${file}.tsx`,
      plugins: [
        '@babel/plugin-syntax-class-properties',
        ['@babel/plugin-syntax-decorators', { decoratorsBeforeExport: true }],
        '@babel/plugin-syntax-jsx',
        ['@babel/plugin-syntax-typescript', { isTSX: true }],
        {
          generatorOverride: (ast) => recast.print(ast),
          parserOverride: (code, options, parse): File =>
            recast.parse(code, {
              parser: { parse: (code: string) => parse(code, { ...options, tokens: true }) },
            }),
        } satisfies PluginObj,
        {
          visitor: {
            VariableDeclarator(path) {
              const id = path.get('id');
              const init = path.get('init');

              if (Array.isArray(init)) return;
              if (!id.isIdentifier() || id.node.name !== 'meta') return;

              const type = id.get('typeAnnotation');

              if (init.isExpression() && type.isTSTypeAnnotation()) {
                init.replaceWith(t.tsSatisfiesExpression(init.node, type.node.typeAnnotation));
                type.remove();
              }
            },
            TSTypeReference(path) {
              const typeName = path.get('typeName');
              const parameters = path.get('typeParameters');

              if (!(typeName.isIdentifier() && typeName.node.name === 'StoryObj')) return;
              parameters.replaceWith(
                t.tsTypeParameterInstantiation([t.tsTypeQuery(t.identifier('meta'))])
              );
            },
          },
        } satisfies PluginObj,
      ],
    });

    if (result.code === code) {
      // console.log('No changes for', file);
    } else {
      fs.writeFileSync(file.replace('.ts', '.ts-4-9'), `\`\`\`tsx\n${result.code}\`\`\`\n`);
      console.log('changed', file);
    }
  } catch (e) {
    invariant(e instanceof Error);
    console.error(e.message);
  }
}

export interface PluginObj<S = File> extends Partial<Babel.PluginObj<S>> {
  parserOverride?(
    code: string,
    options: Babel.ParserOptions,
    parse: (code: string, options: Babel.ParserOptions) => File
  ): File;

  generatorOverride?(
    ast: File,
    options: Babel.GeneratorOptions,
    code: string,
    generate: (ast: File, options: Babel.GeneratorOptions) => string
  ): { code: string; map?: object };
}
