import { autoName } from '../autoName';

it('pulls name from named MDX files', () => {
  expect(autoName('Conventions.mdx', 'Button.stories.mdx', 'Docs')).toEqual('Conventions');
});

it('falls back for default named MDX files', () => {
  expect(autoName('Button.mdx', 'Button.stories.mdx', 'Docs')).toEqual('Docs');
});
