import 'babel-register';
import test from 'ava';
import layoutItemType from './relayout-item-type';

test('RelayoutItem PropType is a function', t => {
  t.is(typeof layoutItemType, 'function');
});
