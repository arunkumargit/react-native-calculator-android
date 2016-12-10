// cmd + m to debug
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import ReactCalculator from './ReactCalculator';

class Calculator extends Component {
  render() {
    return (
      <ReactCalculator />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Calculator);