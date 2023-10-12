import * as React from 'react';

let StyleRegistry: React.FC;

try {
  // next >= v12
  StyleRegistry = require('styled-jsx').StyleRegistry;
} catch {
  // next < v12
  StyleRegistry = React.Fragment;
}

export const StyledJsxDecorator = (Story: React.FC): React.ReactNode => (
  <StyleRegistry>
    <Story />
  </StyleRegistry>
);
