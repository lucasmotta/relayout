/**
 * Used to reset the display property of RelayoutItem's whenever
 * a smaller breakpoint is set to 0
 */
export default function resetClasses(name, props) {
  const items = [];
  const order = ['sm', 'md', 'lg', 'xl'];
  const keys = Object.keys(props)
    .filter(value => order.indexOf(value) >= 0)
    .sort((a, b) => order.indexOf(a) > order.indexOf(b));

  keys.reduce((prev, key) => {
    if (parseInt(props[prev], 10) === 0 && parseInt(props[key], 10) > 0) {
      items.push(`${name}--reset@${key}`);
    }
    return key;
  }, '');

  return items.join(' ');
}
