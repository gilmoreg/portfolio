/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Pick from './Pick';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Pick />, section);
});
