import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './App/app';

export default class obuka extends Component {

    render() {
        return (
          <App />
    );
  }
}

AppRegistry.registerComponent('obuka', () => obuka);
