import React, { Component } from 'react';


import Timer from './Timer';
import Controls from './Controls';
import LapTimeList from './LapTimeList';

import Config from './constants/Config';

import Dropdown from 'react-bootstrap/Dropdown'
import { Card } from 'react-bootstrap';


function getDefaultState() {
  return {
    isRunning: false,
    time: 0,
    timeList: []
  }
}

class Stopwatch extends Component {

  constructor(props) {
    super(props);
    this.state = getDefaultState();
    this.timerRef = null;
  }

  updateTimer(extraTime) {
    const { time } = this.state;
    this.setState({ time: time + extraTime });
  }

  start() {
    this.setState({
      isRunning: true
    }, () => {
      this.timerRef = setInterval(
        () => { this.updateTimer(Config.updateInterval) }, Config.updateInterval
      )
    });
  }

  stop() {
    this.setState({
      isRunning: false
    }, () => {
      clearInterval(this.timerRef);
    });
  }

  reset() {
    this.setState(getDefaultState());
  }

  addLapTime() {
    const { time, timeList } = this.state;

    this.setState({
      timeList: [...timeList, time]
    });
  }

  setDuration() {

  }

  render() {

    const { isRunning, time, timeList } = this.state;

    return (


      <Card >
        <Card.Header>
          <h1>Formulario Toma de Tiempos
            <Timer time={time} />
          </h1>

          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              Operación
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              Estilo
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Card.Header>
        <Controls
          isRunning={isRunning}
          start={() => this.start()}
          stop={() => this.stop()}
          reset={() => this.reset()}
          addLapTime={() => this.addLapTime()}
        />

        <LapTimeList timeList={timeList} />
      </Card>
    );
  }
}

export default Stopwatch;