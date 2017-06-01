/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import './Ani2Mal.css';

const Ani2Mal = props => (
  <section id="ani2mal">
    <img src="https://cloud.githubusercontent.com/assets/18176333/26568165/cb7a831a-44c6-11e7-8ee6-2f4e3b7e0e21.png" alt="Ani2Mal" />
    <h1>Ani2Mal</h1>
    <p>This is the first project I intend to release as a usable service to the public. At first I developed it only as a pet project for myself, but after having seen Wes Bos's excellent <a target="_blank" rel="noopener noreferrer" href="https://learnnode.com/">Learn Node</a> course, I was inspired to put those lessons to work, and this project offered a great opportunity!</p>
    <p>Several topics from that course made their way into this project:</p>
    <section id="node-topics">
      <ul id="reset">
        <li><strong>Pug</strong> (formerly Jade) templating</li>
        <li><strong>Async/Await</strong> and using middleware to catch asynchronous errors</li>
        <li>Stronger adherence to the <strong>MVC</strong> architecture</li>
        <li>A custom <strong>Webpack</strong> configuration for bundling client side Javascript</li>
        <li>Using <strong>Bling.js</strong> instead of <strong>JQuery</strong></li>
      </ul>
    </section>
    <p>I also added the <strong>Bulma</strong> CSS Framework and was rather pleased with its ease of use.</p>
    <p>Unfortunately as of now given the limitations of the Myanimelist API's search capabilities, a significant number of shows are not matched correctly, making the application almost unusable. However, the Anilist API's admin promised me that a future update to their API will expose additional data which will virtually eliminate this problem. I intend to launch a beta test as soon as that happens.</p>
    <Buttons close={props.close} repo={'ani2mal'} />
  </section>
);

Ani2Mal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Ani2Mal;
