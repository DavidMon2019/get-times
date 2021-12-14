// src/stopwatch/components/Timer.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import timeFormat from './utils/timeFormat';
import { Container } from 'react-bootstrap';

class Timer extends Component {

  static proptTypes = {
    time: PropTypes.number
  };

  static defaultProps = {
    time: 0
  };

  render() {
    const { time } = this.props;

    return (
      <Container className="Timer">
        {timeFormat(time)}
      </Container>
    );
  }
}

export default Timer;