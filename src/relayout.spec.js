import 'babel-register';
import test from 'ava';
import { createElement } from 'react';
import { shallow } from 'enzyme';

import Relayout from './relayout';
import RelayoutItem from './relayout-item';

const renderRelayout = (props, content) => shallow(createElement(Relayout, props, content));

test('Has an extra className', t => {
  const className = 'boop';
  const layout = renderRelayout({ className });
  t.true(layout.hasClass(className));
});

test('Has a "gutter" modifier as default', t => {
  const layout = renderRelayout();
  t.true(layout.hasClass('relayout--gutter'));
});

test('Does not have a "gutter" modifier if set to false', t => {
  const layout = renderRelayout({ gutter: false });
  t.false(layout.hasClass('relayout--gutter'));
});

test('It is aligned on the left', t => {
  const layout = renderRelayout({ align: 'left' });
  t.true(layout.hasClass('relayout--left'));
});

test('It is aligned on the right', t => {
  const layout = renderRelayout({ align: 'right' });
  t.true(layout.hasClass('relayout--right'));
});

test('It is aligned on the center', t => {
  const layout = renderRelayout({ align: 'center' });
  t.true(layout.hasClass('relayout--center'));
});

test('It is vertically aligned on the top', t => {
  const layout = renderRelayout({ valign: 'top' });
  t.true(layout.hasClass('relayout--top'));
});

test('It is vertically aligned on the bottom', t => {
  const layout = renderRelayout({ valign: 'bottom' });
  t.true(layout.hasClass('relayout--bottom'));
});

test('It is vertically aligned on the middle', t => {
  const layout = renderRelayout({ valign: 'middle' });
  t.true(layout.hasClass('relayout--middle'));
});

test.only('Has children', t => {
  const item = createElement(RelayoutItem, { large: 6 }, 'Hello World');
  const layout = renderRelayout(null, item);
  t.true(layout.contains(item));
});
