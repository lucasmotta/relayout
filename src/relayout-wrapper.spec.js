import 'babel-register';
import test from 'ava';
import { createElement } from 'react';
import { shallow } from 'enzyme';

import RelayoutWrapper from './relayout-wrapper';

const renderWrapper = (props, content) => shallow(createElement(RelayoutWrapper, props, content));

test('Has an extra className', t => {
  const className = 'boop';
  const wrapper = renderWrapper({ className });
  t.true(wrapper.hasClass(className));
});

test('Wraps from the "small" breakpoint as default', t => {
  const wrapper = renderWrapper();
  t.true(wrapper.hasClass('relayout-wrapper--from-sm'));
});

test('Wraps from the "medium" breakpoing if set', t => {
  const wrapper = renderWrapper({ from: 'md' });
  t.true(wrapper.hasClass('relayout-wrapper--from-md'));
});

test('Wraps from the "large" breakpoing if set', t => {
  const wrapper = renderWrapper({ from: 'lg' });
  t.true(wrapper.hasClass('relayout-wrapper--from-lg'));
});

test('Wraps from the "extra-large" breakpoing if set', t => {
  const wrapper = renderWrapper({ from: 'xl' });
  t.true(wrapper.hasClass('relayout-wrapper--from-xl'));
});
