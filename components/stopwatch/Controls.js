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
      <ButtonGroup className="mb-3">
        {!isRunning ?
          <button
            onClick={start}
            type="button" class="btn btn-primary"
            ref="startBtn" > Start </button>
          : null}

        {isRunning ?
          <button
            onClick={stop}
            type="button" class="btn btn-primary"
            ref="stopBtn" > Stop </button>
          : null}

        <button
          onClick={reset}
          disabled={isRunning} type="button" class="btn btn-primary"
          ref="resetBtn" > Reset </button>

        <button
          onClick={addLapTime}
          disabled={!isRunning}
          type="button" class="btn btn-primary"
          ref="lapBtn" > Lap Time </button>
      </ButtonGroup>
    );
  }
}

export default Controls;