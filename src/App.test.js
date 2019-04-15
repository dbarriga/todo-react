import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('App title should be Todos', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<hi class="center blue-text">Todos</hi>));
});
