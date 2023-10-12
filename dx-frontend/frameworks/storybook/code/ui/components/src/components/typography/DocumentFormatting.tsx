export const nameSpaceClassNames = ({ ...props }, key: string) => {
  const classes = [props.class, props.className];
  // eslint-disable-next-line no-param-reassign
  delete props.class;

  // eslint-disable-next-line no-param-reassign
  props.className = ['sbdocs', `sbdocs-${key}`, ...classes].filter(Boolean).join(' ');

  return props;
};
