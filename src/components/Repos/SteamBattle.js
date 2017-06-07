/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './SteamBattle.css';

const SteamBattle = props => (
  <section>
    <p className={props.more ? '' : 'fade'}>My first <strong>React/Redux</strong> project. I never expected React to be so much fun!</p>
    <p className={props.more ? '' : 'hidden'}>The major challenge on this project was struggling with the <strong>Steam API</strong>. It is a poor quality API: it is highly fragmented, outdated, and inadequately documented. It has multiple endpoints using different formats with no consistent return pattern. Although I think this project was successful in the end, I had to scrap many plans to make the scoring more complex and interesting due to limitations of the API.</p>
    <p className={props.more ? '' : 'hidden'}>Since the Steam API does not support <strong>CORS</strong>, I had to create a backend proxy. Since I love to write APIs so much, I was grateful for the chance to do so. Originally I built a Node/Express server to handle the job, but later took this as an opportunity to learn <strong>Google Cloud Functions</strong> and converted my endpoints over.</p>
    <p className={props.more ? '' : 'hidden'}>On the front end, dealing with the Steam APIs rate limit meant that I had to throttle my network calls. I used <strong>lodash</strong> <strong>debounce</strong> to implement a custom type-ahead feature that tells you when you have a valid Steam ID as you type.</p>
    <p className={props.more ? '' : 'hidden'}>My struggles with the Steam API certainly inspired me to write better APIs myself. It was a major factor in pushing me to try out <strong>GraphQL</strong> on my next project.</p>
    <div className="readmore"><button onClick={props.toggleMore}>Read {props.more ? 'less' : 'more'}...</button></div>
  </section>
);

SteamBattle.propTypes = {
  more: PropTypes.bool,
  toggleMore: PropTypes.func,
};

SteamBattle.defaultProps = {
  more: false,
  toggleMore: () => {},
};

export default SteamBattle;
