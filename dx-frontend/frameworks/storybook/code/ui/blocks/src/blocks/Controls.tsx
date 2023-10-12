/* eslint-disable react/destructuring-assignment */
import type { Renderer } from '@storybook/csf';
import type { ModuleExports } from '@storybook/types';
import type { FC } from 'react';
import React, { useContext } from 'react';
import { filterArgTypes } from '@storybook/preview-api';
import type { PropDescriptor } from '@storybook/preview-api';

import type { SortType } from '../components';
import { ArgsTable as PureArgsTable } from '../components';
import { DocsContext } from './DocsContext';
import { useGlobals } from './useGlobals';
import { useArgs } from './useArgs';

type ControlsParameters = {
  include?: PropDescriptor;
  exclude?: PropDescriptor;
  sort?: SortType;
};

type ControlsProps = ControlsParameters & {
  of?: Renderer['component'] | ModuleExports;
};

export const Controls: FC<ControlsProps> = (props) => {
  const { of } = props;
  if ('of' in props && of === undefined) {
    throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?');
  }

  const context = useContext(DocsContext);
  const { story } = context.resolveOf(of || 'story', ['story']);
  const { parameters, argTypes } = story;
  const controlsParameters = parameters.docs?.controls || ({} as ControlsParameters);

  const include = props.include ?? controlsParameters.include;
  const exclude = props.exclude ?? controlsParameters.exclude;
  const sort = props.sort ?? controlsParameters.sort;

  const [args, updateArgs, resetArgs] = useArgs(story, context);
  const [globals] = useGlobals(story, context);

  const filteredArgTypes = filterArgTypes(argTypes, include, exclude);

  return (
    <PureArgsTable
      rows={filteredArgTypes}
      args={args}
      globals={globals}
      updateArgs={updateArgs}
      resetArgs={resetArgs}
      sort={sort}
    />
  );
};
