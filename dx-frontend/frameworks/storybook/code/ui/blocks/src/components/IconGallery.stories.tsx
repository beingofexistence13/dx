import React from 'react';
import { Icons as ExampleIcon } from '@storybook/components';
import { IconItem, IconGallery } from './IconGallery';

export default {
  component: IconGallery,
};

export const DefaultStyle = () => (
  <IconGallery>
    <IconItem name="add">
      <ExampleIcon icon="add" />
    </IconItem>
    <IconItem name="subtract">
      <ExampleIcon icon="subtract" />
    </IconItem>
    <IconItem name="home">
      <ExampleIcon icon="home" />
    </IconItem>
    <IconItem name="facehappy">
      <ExampleIcon icon="facehappy" />
    </IconItem>
    <IconItem name="bar">
      <img src="https://storybook.js.org/images/placeholders/50x50.png" alt="example" />
    </IconItem>
    <IconItem name="bar">
      <img src="https://storybook.js.org/images/placeholders/50x50.png" alt="example" />
    </IconItem>
  </IconGallery>
);
