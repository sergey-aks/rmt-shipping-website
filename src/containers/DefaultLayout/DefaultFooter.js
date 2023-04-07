import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollToTop from "react-scroll-to-top";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>RMT Shipping & Trading GmbH &copy; 2019</span>
        <span className="ml-auto">Powered by <a href="http://axa-d.ru/" target="_blank" rel="noopener noreferrer">axa-d.ru</a></span>
        <div
          className='go-to-top'
        >
          <ScrollToTop smooth />
        </div>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
