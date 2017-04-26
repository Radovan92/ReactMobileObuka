/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class obuka extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Login
        </Text>
         <TextInput style={styles.loginField} placeholder={"Username"} />
         <TextInput style={styles.passField} placeholder={"Password"} />
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  loginField: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'green',

  },

  passField: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'blue',

  },
});

AppRegistry.registerComponent('obuka', () => obuka);
