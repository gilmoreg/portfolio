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

Copy.propTypes = {
  copy: PropTypes.element.isRequired,
};

export default Copy;
