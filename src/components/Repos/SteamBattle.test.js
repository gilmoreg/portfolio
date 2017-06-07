/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import SteamBattle from './SteamBattle';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<SteamBattle />, section);
});
