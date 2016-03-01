import test from 'ava';
import sizeType from './size-type';

test('Size PropType is a function', t => {
  t.is(typeof sizeType, 'function');
});

test('Size PropType accepts values from 1 and 12', t => {
  const props = { small: 0, medium: 4, large: 8, extraLarge: 12 };

  t.is(sizeType(props, 'small'), null);
  t.is(sizeType(props, 'medium'), null);
  t.is(sizeType(props, 'large'), null);
  t.is(sizeType(props, 'extraLarge'), null);
});

test('Size PropType fails on values bellow 1 or above 12 or NaN', t => {
  const props = { small: -10, medium: 'md', large: 13, extraLarge: 'unicorn' };

  t.true(sizeType(props, 'small') instanceof Error);
  t.true(sizeType(props, 'medium') instanceof Error);
  t.true(sizeType(props, 'large') instanceof Error);
  t.true(sizeType(props, 'extraLarge') instanceof Error);
});
