import { processPreviewAnnotation } from './process-preview-annotation';
import 'jest-os-detection';

describe('processPreviewAnnotation()', () => {
  it('should pull the `bare` value from an object', () => {
    const annotation = {
      bare: '@storybook/addon-links/preview',
      absolute: '/Users/foo/storybook/node_modules/@storybook/addon-links/dist/preview.mjs',
    };
    const url = processPreviewAnnotation(annotation, '/Users/foo/storybook/');
    expect(url).toBe('@storybook/addon-links/preview');
  });

  it.skipWindows(
    'should convert absolute filesystem paths into urls relative to project root',
    () => {
      const annotation = '/Users/foo/storybook/.storybook/preview.js';
      const url = processPreviewAnnotation(annotation, '/Users/foo/storybook/');
      expect(url).toBe('/.storybook/preview.js');
    }
  );

  it.onWindows(
    'should convert absolute windows filesystem paths into urls relative to project root',
    () => {
      const annotation = 'C:/foo/storybook/.storybook/preview.js';
      const url = processPreviewAnnotation(annotation, 'C:/foo/storybook');
      expect(url).toBe('/.storybook/preview.js');
    }
  );

  it('should convert relative paths into urls', () => {
    const annotation = './src/stories/components';
    const url = processPreviewAnnotation(annotation, '/Users/foo/storybook/');
    expect(url).toBe('/src/stories/components');
  });

  // TODO: figure out why this fails on windows. Could be related to storybook-metadata.test file altering path.sep
  it.skipWindows('should convert node_modules into bare paths', () => {
    const annotation = '/Users/foo/storybook/node_modules/storybook-addon/preview';
    const url = processPreviewAnnotation(annotation, '/Users/foo/storybook/');
    expect(url).toBe('storybook-addon/preview');
  });

  it.skipWindows('should convert relative paths outside the root into absolute', () => {
    const annotation = '../parent.js';
    const url = processPreviewAnnotation(annotation, '/Users/foo/storybook/');
    expect(url).toBe('/Users/foo/parent.js');
  });

  it.onWindows('should convert relative paths outside the root into absolute on Windows', () => {
    const annotation = '../parent.js';
    const url = processPreviewAnnotation(annotation, 'C:/Users/foo/storybook/');
    expect(url).toBe('C:/Users/foo/parent.js');
  });

  it.skipWindows('should not change absolute paths outside of the project root', () => {
    const annotation = '/Users/foo/parent.js';
    const url = processPreviewAnnotation(annotation, '/Users/foo/storybook/');
    expect(url).toBe(annotation);
  });

  it.onWindows('should not change Windows absolute paths outside of the project root', () => {
    const annotation = 'D:/Users/foo/parent.js';
    const url = processPreviewAnnotation(annotation, 'D:/Users/foo/storybook/');
    expect(url).toBe(annotation);
  });
});
