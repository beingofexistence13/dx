import type { StrictArgTypes } from '@storybook/types';
import type { ArgTypesExtractor, DocgenInfo, PropDef } from '@storybook/docs-tools';
import { hasDocgen, extractComponentProps, convert } from '@storybook/docs-tools';

const SECTIONS = ['props', 'events', 'slots', 'methods'];

/**
 * As @enum tag is not implemented in vuedocgen, infers propdef enum type
 * from the presence of @values tag.
 */
function inferEnum(propDef: PropDef, docgenInfo: DocgenInfo): false | PropDef {
  // cast as any, since "values" doesn't exist in DocgenInfo type
  const { type, values } = docgenInfo as any;
  const matched = Array.isArray(values) && values.length && type && type.name !== 'enum';

  if (!matched) {
    return false;
  }

  const enumString = values.join(', ');
  let { summary } = propDef.type;
  summary = summary ? `${summary}: ${enumString}` : enumString;

  Object.assign(propDef.type, {
    ...propDef.type,
    name: 'enum',
    value: values,
    summary,
  });
  return propDef;
}

/**
 * @returns {Array} result
 * @returns {PropDef} result.def - propDef
 * @returns {boolean} result.isChanged - flag whether propDef is mutated or not.
 *  this is needed to prevent sbType from performing convert(docgenInfo).
 */
function verifyPropDef(propDef: PropDef, docgenInfo: DocgenInfo): [PropDef, boolean] {
  let def = propDef;
  let isChanged = false;

  // another callback can be added here.
  // callback is mutually exclusive from each other.
  const callbacks = [inferEnum];
  for (let i = 0, len = callbacks.length; i < len; i += 1) {
    const matched = callbacks[i](propDef, docgenInfo);
    if (matched) {
      def = matched;
      isChanged = true;
    }
  }

  return [def, isChanged];
}

export const extractArgTypes: ArgTypesExtractor = (component) => {
  if (!hasDocgen(component)) {
    return null;
  }
  const results: StrictArgTypes = {};
  SECTIONS.forEach((section) => {
    const props = extractComponentProps(component, section);
    props.forEach(({ propDef, docgenInfo, jsDocTags }) => {
      const [result, isPropDefChanged] = verifyPropDef(propDef, docgenInfo);
      const { name, type, description, defaultValue: defaultSummary, required } = result;

      let sbType;
      if (isPropDefChanged) {
        sbType = type;
      } else {
        sbType = section === 'props' ? convert(docgenInfo) : { name: 'void' };
      }
      results[name] = {
        name,
        description,
        type: { required, ...sbType },
        table: {
          type,
          jsDocTags,
          defaultValue: defaultSummary,
          category: section,
        },
      };
    });
  });
  return results;
};
