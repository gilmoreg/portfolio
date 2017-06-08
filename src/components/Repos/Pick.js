/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './Pick.css';

const Pick = props => (
  <section className="Pick">
    <p className={props.more ? '' : 'fade'}>Many fans of anime keep track of what shows they've watched on a site called Myanimelist. They also keep track of shows they plan to watch, and many times this list can grow to dozens of shows, leaving them flustered as to what they should watch next. They end up posting their list on social media asking others to help them choose.</p>
    <p className={props.more ? '' : 'hidden'}>Pick makes this easier by generating a poll out of a user's plan to watch list which they can then share. Others can quickly vote for a show without having to type out a comment or an argument, and the user can quickly see which option is a crowd favorite.</p>
    <p className={props.more ? '' : 'hidden'}>This was my first project using <strong>Koa</strong>. I went in thinking I was going to learn all about generators in Javascript, only to find that they were being deprecated in favor of <strong>async/await</strong>, something I already know quite well. It was still a learning experience! Koa is different from Express in that it comes with very little out of the box. Even routing needs to be imported as a dependency. However, with Koa deprecating generators, much of the middleware on NPM is no longer suitable, and I had to do a lot of research to find packages that were compatible with Koa 2.</p>
    <p className={props.more ? '' : 'hidden'}>One interesting challenge I found was in implementing <strong>rate limiting</strong>. The package I chose was only applying limiting at random to my great frustration; after stepping through the source I learned that the regex test for which path to limit was failing at random. It was then that I learned what I shall never forget: that the <strong>Javascript RegExp object</strong> is stateful when the global flag is enabled. Thus the results were different depending on whether another test was being run at the same time. Another painful lesson learned!</p>
    <div className="readmore"><button onClick={props.toggleMore}>Read {props.more ? 'less' : 'more'}...</button></div>
  </section>
);

Pick.propTypes = {
  more: PropTypes.bool,
  toggleMore: PropTypes.func,
};

Pick.defaultProps = {
  more: false,
  toggleMore: () => {},
};

export default Pick;
