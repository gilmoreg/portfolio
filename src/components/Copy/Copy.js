import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Copy.css';

class Copy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false,
    };
    this.toggleMore = this.toggleMore.bind(this);
  }

  toggleMore() {
    this.setState({ more: !this.state.more });
  }

  render() {
    const { copy } = this.props;
    return React.cloneElement(copy, { more: this.state.more, toggleMore: this.toggleMore });
  }
}

Copy.defaultProps = {
  copy: React.createElement('p'),
};

Copy.propTypes = {
  copy: PropTypes.Component,
};

export default Copy;
