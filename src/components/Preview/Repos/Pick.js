/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import './Pick.css';

const Pick = props => (
  <section className="Pick">
    <img src="http://res.cloudinary.com/dk85nueap/image/upload/v1496772162/pick-large-montage_jxvg6l.png" alt="Pick" />
    <h1>Pick</h1>
    <p>My first project using <strong>Koa</strong>.</p>
    <Buttons close={props.close} repo={'pick'} />
  </section>
);

Pick.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Pick;
