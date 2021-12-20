import React, { Component } from 'react';
import PropTypes from 'prop-types';

import timeFormat from '../stopwatch/utils/timeFormat';
import { Table } from 'react-bootstrap';

class LapTime extends Component {

  static proptTypes = {
    lap: PropTypes.number,
    time: PropTypes.number,
    duration: PropTypes.number,
    lista: PropTypes.array
  };

  static defaultProps = {
    lap: 0,
    time: 0,
    duration: 0,
    lista: []
  };

  render() {

    const { lap, time, duration, lista } = this.props;

    return (
      <tr>
        <td>{lap}</td>
        <td>{timeFormat(time)}</td>
        <td>{timeFormat(duration)}</td>
      </tr>

    );
  }
}

export default LapTime;