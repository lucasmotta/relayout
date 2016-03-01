import 'babel-register';
import test from 'ava';
import { createElement } from 'react';
import { shallow } from 'enzyme';

import RelayoutItem from './relayout-item';

const renderItem = (props, content) => shallow(createElement(RelayoutItem, props, content));

test('Has a "relative" modifier', t => {
  const item = renderItem({ relative: true });
  t.true(item.hasClass('relayout__item--relative'));
});

test('Has an extra className', t => {
  const className = 'boop';
  const item = renderItem({ className });
  t.true(item.hasClass(className));
});

test('Has 12 columns on small as default', t => {
  const item = renderItem();
  t.true(item.hasClass('relayout__item'));
  t.true(item.hasClass('relayout__item--12'));
});

test('Has 6 columns on a small breakpoint', t => {
  const item = renderItem({ sm: 6 });
  t.true(item.hasClass('relayout__item--6'));
});

test('Has 2 columns on a medium breakpoint', t => {
  const item = renderItem({ md: 2 });
  t.true(item.hasClass('relayout__item--2@md'));
});

test('Has 8 columns on a large breakpoint', t => {
  const item = renderItem({ lg: 8 });
  t.true(item.hasClass('relayout__item--8@lg'));
});

test('Has 1 column on a large breakpoint', t => {
  const item = renderItem({ xl: 1 });
  t.true(item.hasClass('relayout__item--1@xl'));
});

test('Has 3 columns on a small and 5 on medium', t => {
  const item = renderItem({ sm: 3, md: 5 });
  t.true(item.hasClass('relayout__item--3'));
  t.true(item.hasClass('relayout__item--5@md'));
});

test('Has 12 columns on a large and 9 on extraLarge', t => {
  const item = renderItem({ lg: 12, xl: 9 });
  t.true(item.hasClass('relayout__item--12@lg'));
  t.true(item.hasClass('relayout__item--9@xl'));
});

test('Has columns on all breakpoints', t => {
  const item = renderItem({ sm: 1, md: 4, lg: 7, xl: 11 });
  t.true(item.hasClass('relayout__item--1'));
  t.true(item.hasClass('relayout__item--4@md'));
  t.true(item.hasClass('relayout__item--7@lg'));
  t.true(item.hasClass('relayout__item--11@xl'));
});

test('Has a reset class on medium and extra-large', t => {
  const item = renderItem({ sm: 0, md: 4, lg: 0, xl: 11 });
  t.true(item.hasClass('relayout__item--reset@md'));
  t.true(item.hasClass('relayout__item--reset@xl'));
});

test('Has a reset class on large', t => {
  const item1 = renderItem({ sm: 0, lg: 5 });
  const item2 = renderItem({ md: 0, lg: 5 });
  t.true(item1.hasClass('relayout__item--reset@lg'));
  t.true(item2.hasClass('relayout__item--reset@lg'));
});

test('Has children', t => {
  const paragraph = createElement('p', null, 'Hello World');
  const item = renderItem(null, paragraph);
  t.true(item.contains(paragraph));
});
