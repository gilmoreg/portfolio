/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Buttons = props =>
  <ul>
    <li><i className="fa fa-external-link" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={`http://${props.repo}.gilmoreg.com`}>Demo</a></li>
    <li><i className="fa fa-github" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={`http://github.com/gilmoreg/${props.repo}`}>Repo</a></li>
    <li><button onClick={props.close}><i className="fa fa-times" aria-hidden="true" />Close</button></li>
  </ul>;

Buttons.propTypes = {
  close: PropTypes.func.isRequired,
  repo: PropTypes.string.isRequired,
};

export default Buttons;
