/* eslint-disable react/prop-types */
import React from 'react';

const Container = ({ children }) => <div>{children}</div>;

export const decorators = [
  (StoryFn, { parameters, globals }) => (
    <Container>
      {parameters.prefix} <StoryFn /> {globals.suffix}
    </Container>
  ),
];

export const parameters = { prefix: 'prefix' };
export const globals = { suffix: 'suffix' };
