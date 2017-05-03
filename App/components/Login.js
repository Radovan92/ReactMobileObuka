/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, TouchableHighlight,Icon,TouchableOpacity,Button} from 'react-native';

class Login extends Component {

    render() {
        const menuIcon = <Icon name="bars" size={23} color="#fff"/>;
        return (
            <View style={styles.container}>
                <TextInput style={styles.loginField} placeholder={"Username"}/>
                      <TextInput secureTextEntry style={{padding:10}} placeholder={"password"}/>
                <Button style={styles.fields} title="Login">
                </Button>
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
)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
      marginBottom:5
    }
});
