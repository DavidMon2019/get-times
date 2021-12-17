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

    const { lap, time, duration,lista } = this.props;

    return (
      <Table striped bordered hover variant="ligth">
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="LapTime__lap" >{lap}</td>
            <td className="LapTime__time" >{timeFormat(time)}</td>
            <td className='LapTime__time'>{timeFormat(duration)}</td>
          </tr>
        </tbody>
      </Table>


    );
  }
}

export default LapTime;