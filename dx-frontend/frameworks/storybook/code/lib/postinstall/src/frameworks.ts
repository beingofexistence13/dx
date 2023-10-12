type Deps = Record<string, string>;
interface PackageJson {
  dependencies?: Deps;
  devDependencies?: Deps;
}

const FRAMEWORKS = [
  'angular',
  'ember',
  'html',
  'preact',
  'react',
  'react-native',
  'svelte',
  'vue',
  'web-components',
];

export const getFrameworks = ({ dependencies, devDependencies }: PackageJson): string[] => {
  const allDeps: Deps = {};
  Object.assign(allDeps, dependencies || {});
  Object.assign(allDeps, devDependencies || {});

  return FRAMEWORKS.filter((f) => !!allDeps[`@storybook/${f}`]);
};
