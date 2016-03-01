export default function sizeType(props, propName, componentName) {
  const value = props[propName];
  const parsedValue = parseInt(value, 10);
  const isNumber = typeof parsedValue === 'number';
  if (value === undefined || (isNumber && value >= 0 && value <= 12)) {
    return null;
  }
  const msg = `Wrong column size on ${componentName}: it should be a number between 0 and 12.`;
  return new Error(msg);
}
