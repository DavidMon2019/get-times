import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-bootstrap';

class Controls extends Component {

  static proptTypes = {
    isRunning: PropTypes.bool,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    addLapTime: PropTypes.func.isRequired
  };

  static defaultProps = {
    isRunning: false
  };

  render() {
    const { isRunning, start, stop, reset, addLapTime } = this.props;

    return (

      <div style={{ position: "fixed", top: "50%", right: 0 }}>
        <tr>
          {!isRunning ?
            <button
              onClick={start}
              type="button" class="btn btn-primary btn-lg"
              ref="startBtn" > <i class="fa fa-play"></i> </button>
            : null}
        </tr>
        <tr>

          {isRunning ?
            <button
              onClick={stop}
              type="button" class="btn btn-success btn-lg"
              ref="stopBtn" ><i class="fa fa-pause"> </i> </button>
            : null}
        </tr>
        <tr>
          <button
            onClick={reset}
            disabled={isRunning} type="button" class="btn btn-danger btn-lg"
            ref="resetBtn" > <i class="fa fa-stop"></i> </button>
        </tr>

        <tr>
          <button
            onClick={addLapTime}
            disabled={!isRunning}
            type="button" class="btn btn-warning btn-lg"
            ref="lapBtn" > <i class="fa fa-undo"></i> </button>

        </tr>


      </div>

    );
  }
}

export default Controls;