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
    const more = this.state.more;
    const toggleMore = this.toggleMore;
    return React.cloneElement(copy, { more, toggleMore });
  }
}

Copy.propTypes = {
  copy: PropTypes.element.isRequired,
};

export default Copy;
