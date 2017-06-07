/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Copy from './Copy';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Copy />, section);
});
