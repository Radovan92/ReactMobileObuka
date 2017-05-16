/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Button, Alert} from 'react-native';


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
            <Image source={require('../res/winery_back.jpg')} style={styles.backgroundImage}>
                <Text style={styles.welcome}>
                    Dobrodošli U Virtualnu Vinariju "Aleksandrija"!
                </Text>
                <TextInput style={styles.instructions} maxLength={50} placeholderTextColor={'#FFF'} placeholder={"Korisničko ime"}/>
                <TextInput style={styles.instructions} maxLength={50} placeholderTextColor={'#FFF'} placeholder={"Šifra"} password={true}/>
                <View style={{padding: 20, margin: 10}}>
                    <Button
                        onPress={this.loginMe}
                        title="Login"
                        color="#841584"
                    />
                </View>
            </Image>
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
        color: "#FFF",
    },
    instructions: {
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 5,
        paddingRight: 15,
        paddingLeft: 15,
        //borderColor: '#FFF', borderWidth: 1,
        backgroundColor: '#841584',
    },
    backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    resizeMode: 'cover', // or 'stretch'
    },
});

