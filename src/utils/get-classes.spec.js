import test from 'ava';
import classes from './get-classes';

const props = {
  unicorn: true,
  horse: false,
  size: 'small',
  offset: 5,
  extra: true,
};

const modifiers = {
  unicorn: 'unicorn',
  horse: 'horse',
  size: `size-${props.size}`,
  offset: `offset-${props.offset}`,
};

test('Compile classes with BEM style modifiers', t => {
  const className = classes('item', props, modifiers);

  t.same(className, 'item item--unicorn item--size-small item--offset-5');
});

test('Compile additional classes', t => {
  const className = classes('item', props, modifiers, 'beep', 'boop');

  t.same(className, 'item item--unicorn item--size-small item--offset-5 beep boop');
});
