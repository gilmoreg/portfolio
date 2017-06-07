/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Condictor from './Condictor';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Condictor />, section);
});
