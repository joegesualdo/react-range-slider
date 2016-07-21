import React from 'react';
import RangeSlider from './index.jsx';
import style from './index.css';
import test from 'ava';
import { shallow } from 'enzyme';

test('root tag is an input', t => {
  const wrapper = shallow(<RangeSlider />);
  t.is(wrapper.type(), 'div');
});
