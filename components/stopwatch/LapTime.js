import React, { Component } from 'react';
import PropTypes from 'prop-types';

import timeFormat from '../stopwatch/utils/timeFormat';

class LapTime extends Component {

  static proptTypes = {
    lap: PropTypes.number,
    time: PropTypes.number,
    duration: PropTypes.number
  };

  static defaultProps = {
    lap: 0,
    time: 0,
    duration: 0
  };

  render() {

    const { lap, time,duration } = this.props;

    return (
      <div className="LapTime">
        <span className="LapTime__lap" >{lap}</span>
        <span className="LapTime__time" >{timeFormat(time)}</span>
        <span className='LapTime__time'>{timeFormat(duration)}</span>
      </div>
    );
  }
}

export default LapTime;