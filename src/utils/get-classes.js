export default function classes(name, props, modifiers, ...extra) {
  const extraClasses = extra.length ? ` ${extra.join(' ')}` : '';
  return Object.keys(modifiers).reduce((prev, key) => {
    if (!props[key]) {
      return prev;
    }
    return `${prev} ${name}--${modifiers[key]}`;
  }, name) + extraClasses;
}
