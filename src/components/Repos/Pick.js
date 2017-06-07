/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './Pick.css';

const Pick = props => (
  <section className="Pick">
    <p className={props.more ? '' : 'fade'}>My first project using <strong>Koa</strong>.</p>
    <p className={props.more ? '' : 'hidden'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos assumenda quis, perspiciatis voluptatum et impedit numquam voluptatibus id necessitatibus voluptatem aut voluptates consequuntur quod incidunt nesciunt quia nemo dolor.</p>
    <p className={props.more ? '' : 'hidden'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos assumenda quis, perspiciatis voluptatum et impedit numquam voluptatibus id necessitatibus voluptatem aut voluptates consequuntur quod incidunt nesciunt quia nemo dolor.</p>
    <div className="readmore"><button onClick={props.toggleMore} >Read more...</button></div>
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
