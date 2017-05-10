/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, Button, ert} from 'react-native';


class Login extends Component {

    constructor(props) {
        super(props);
        this.loginMe = this.loginMe.bind(this);
    }


    loginMe() {
        this.props.navigator.push({
            component: 'home'
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to WineApp!
                </Text>
                <TextInput style={styles.instructions} placeholder={"Username"}/>
                <TextInput style={styles.instructions} secureTextEntry={true} placeholder={"Password"}/>
                <View style={{padding: 20, margin: 10}}>
                    <Button
                        onPress={this.loginMe}
                        title="Login"
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
)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        borderWidth: 1,
        borderColor: 'gray',
    },
});

