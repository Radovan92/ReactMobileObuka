import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Button} from 'react-native';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.goBackToLogin = this.goBackToLogin.bind(this);
        this.goToAllWines = this.goToAllWines.bind(this);
    }


    goBackToLogin() {
        this.props.navigator.pop();
    }
    goToAllWines() {
        this.props.navigator.push({
        component: 'wine'
      });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to WineApp!
                </Text>
                <View style={{padding: 20, margin: 10}}>
                    <Button
                        onPress={this.goToAllWines}
                        title="Go to all wines"
                        color="#841584"

                    />
                    <Button
                        onPress={this.goBackToLogin}
                        title="Go back to Login"
                        color="#841584"

                    />
                </View>

             </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        logInFailed: state.appReducer.logInFailed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginRestCall: (username, password) => dispatch(loginRestCall(username, password))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
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
  }
});

