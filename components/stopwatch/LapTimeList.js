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
      <Container>
        {
          timeList.map((time, index) => {
            return (
              <div key={index}>
                <LapTime lap={index + 1} time={time} duration={time - timeList[index - 1]} />
              </div>
            )
          })
        }
      </Container>
    );
  }
}

export default LapTimeList;