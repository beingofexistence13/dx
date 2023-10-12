import { describe, expect, test } from '@jest/globals';
import type { Args } from '@storybook/types';
import { generateSvelteSource } from './sourceDecorator';

expect.addSnapshotSerializer({
  print: (val: any) => val,
  test: (val: unknown) => typeof val === 'string',
});

const loremIpsum = 'Lorem ipsum dolor sit amet';
const lotOfProperties = { property1: loremIpsum, property2: loremIpsum, property3: loremIpsum };

function generateForArgs(args: Args, slotProperty: string | null = null) {
  return generateSvelteSource({ name: 'Component' }, args, {}, slotProperty);
}

describe('generateSvelteSource', () => {
  test('boolean true', () => {
    expect(generateForArgs({ bool: true })).toMatchInlineSnapshot(`<Component bool/>`);
  });
  test('boolean false', () => {
    expect(generateForArgs({ bool: false })).toMatchInlineSnapshot(`<Component bool={false}/>`);
  });
  test('null property', () => {
    expect(generateForArgs({ propnull: null })).toMatchInlineSnapshot(`<Component />`);
  });
  test('string property', () => {
    expect(generateForArgs({ str: 'mystr' })).toMatchInlineSnapshot(`<Component str="mystr"/>`);
  });
  test('number property', () => {
    expect(generateForArgs({ count: 42 })).toMatchInlineSnapshot(`<Component count={42}/>`);
  });
  test('object property', () => {
    expect(generateForArgs({ obj: { x: true } })).toMatchInlineSnapshot(
      `<Component obj={{"x":true}}/>`
    );
  });
  test('multiple properties', () => {
    expect(generateForArgs({ a: 1, b: 2 })).toMatchInlineSnapshot(`<Component a={1} b={2}/>`);
  });
  test('lot of properties', () => {
    expect(generateForArgs(lotOfProperties)).toMatchInlineSnapshot(`
      <Component
        property1="Lorem ipsum dolor sit amet"
        property2="Lorem ipsum dolor sit amet"
        property3="Lorem ipsum dolor sit amet"/>
    `);
  });
  test('slot property', () => {
    expect(generateForArgs({ content: 'xyz', myProp: 'abc' }, 'content')).toMatchInlineSnapshot(`
      <Component myProp="abc">
          xyz
      </Component>
    `);
  });
  test('slot property with lot of properties', () => {
    expect(generateForArgs({ content: 'xyz', ...lotOfProperties }, 'content'))
      .toMatchInlineSnapshot(`
      <Component
        property1="Lorem ipsum dolor sit amet"
        property2="Lorem ipsum dolor sit amet"
        property3="Lorem ipsum dolor sit amet">
          xyz
      </Component>
    `);
  });
  test('component is not set', () => {
    expect(generateSvelteSource(null, {}, {}, null)).toBeNull();
  });
  test('Skip event property', () => {
    expect(
      generateSvelteSource(
        { name: 'Component' },
        { event_click: () => {} },
        { event_click: { action: 'click' } }
      )
    ).toMatchInlineSnapshot(`<Component />`);
  });
  test('Property value is a function', () => {
    expect(
      generateSvelteSource({ name: 'Component' }, { myHandler: () => {} }, {})
    ).toMatchInlineSnapshot(`<Component myHandler={<handler>}/>`);
  });
});
