/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Referendus from './Referendus';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Referendus />, section);
});
