import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap'

import LapTime from './LapTime';

class LapTimeList extends Component {

  static proptTypes = {
    timeList: PropTypes.array
  };

  static defaultProps = {
    timeList: []
  };

  render() {

    const { timeList } = this.props;

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
          {
            timeList.map((time, index) => {
              if (index == 0) {
                return (
                  <div key={index}>
                    <LapTime lap={index + 1} time={time} duration={time} />
                  </div>
                )

              }
              return (
                <div key={index}>
                  <LapTime lap={index + 1} time={time} duration={time - timeList[index - 1]} />
                </div>
              )
            })
          }
        </tbody>
      </Table>
    );
  }
}

export default LapTimeList;