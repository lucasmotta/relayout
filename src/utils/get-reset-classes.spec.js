import test from 'ava';
import resetClasses from './get-reset-classes';

test('Should not add reset modifiers if no brekpoints are set to 0', t => {
  t.same(resetClasses('item', { sm: 12, md: 1, lg: 6, xl: 8 }), '');
  t.same(resetClasses('item', { md: 1, lg: 6, xl: 8 }), '');
  t.same(resetClasses('item', { md: 1, xl: 8 }), '');
  t.same(resetClasses('item', { lg: 6, xl: 8 }), '');
  t.same(resetClasses('item', { sm: 12, xl: 12 }), '');
  t.same(resetClasses('item', { md: 1 }), '');
  t.same(resetClasses('item', { xl: 8 }), '');
  t.same(resetClasses('item', { sm: 12 }), '');
  t.same(resetClasses('item', { lg: 6 }), '');
  t.same(resetClasses('item', {}), '');
});

test.only('Adds a reset modifiers if needed', t => {
  t.same(resetClasses('item', { sm: 0, md: 1, lg: 0, xl: 8 }), 'item--reset@md item--reset@xl');
  t.same(resetClasses('item', { sm: 0, lg: 0, xl: 8 }), 'item--reset@xl');
  t.same(resetClasses('item', { sm: 0, md: 1, lg: 0 }), 'item--reset@md');
  t.same(resetClasses('item', { md: 0, lg: 6 }), 'item--reset@lg');
  t.same(resetClasses('item', { sm: 0, xl: 6 }), 'item--reset@xl');
  t.same(resetClasses('item', { md: 0, xl: 6 }), 'item--reset@xl');
  t.same(resetClasses('item', { lg: 0, xl: 6 }), 'item--reset@xl');
});
