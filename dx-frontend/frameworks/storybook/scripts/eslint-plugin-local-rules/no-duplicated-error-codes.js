module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure unique error codes per category in the same file',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
  },
  create(context) {
    const errorClasses = {};

    return {
      ClassDeclaration(node) {
        if (node.superClass.name === 'StorybookError') {
          const categoryProperty = node.body.body.find((prop) => {
            return prop.type === 'PropertyDefinition' && prop.key.name === 'category';
          });

          const codeProperty = node.body.body.find((prop) => {
            return prop.type === 'PropertyDefinition' && prop.key.name === 'code';
          });

          if (categoryProperty && categoryProperty.value.type === 'MemberExpression') {
            const categoryName = categoryProperty.value.property.name;

            if (codeProperty && codeProperty.value.type === 'Literal') {
              const errorCode = codeProperty.value.value;

              if (!errorClasses[categoryName]) {
                errorClasses[categoryName] = new Set();
              }

              if (errorClasses[categoryName].has(errorCode)) {
                context.report({
                  node: codeProperty,
                  message: `Duplicate error code '${errorCode}' in category '${categoryName}'.`,
                });
              } else {
                errorClasses[categoryName].add(errorCode);
              }
            }
          }
        }
      },
    };
  },
};
