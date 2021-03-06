import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Button} from 'react-native';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.goBackToLogin = this.goBackToLogin.bind(this);
        this.goToWine = this.goToWine.bind(this);
        this.goToUsers = this.goToUsers.bind(this);
    }


    goBackToLogin() {
        // this.props.navigator.push({
        //     component: 'login'
        // });
        this.props.navigator.pop();
    };

    goToWine() {
        this.props.navigator.push({
        component: 'wineAll'
         });
        //this.props.navigator.pop();
    };

    goToUsers() {
        this.props.navigator.push({
            component: 'usersAll'
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: '#61a40e',
                        justifyContent: 'space-between',
                        height: 50
                    }}>
                    <TouchableHighlight onPress={this.goBackToLogin.bind(this)} style={styles.rowElement}>

                        <View style={{padding: 13}}>
                            <Text> Nazad </Text>

                        </View>

                    </TouchableHighlight>
                    <View style={{}}>
                        <Text style={{fontSize: 19, padding: 10, color: '#fff'}}>Vinarija Bla Bla</Text>


                    </View>
                    <View>
                        <TouchableHighlight onPress={this.goBackToLogin.bind(this)} style={styles.rowElement}>

                            <View style={{padding: 13}}>
                                <Text> Napred</Text>

                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
                <Text style={styles.welcome}>
                  Welcome to React Native!1234545
                </Text>
                <View style={{padding: 10, margin: 5}}>
                    <Button
                        onPress={this.goBackToLogin}
                        title="Go back to Login"
                        color="#841584"

                    />
                    </View>
                <View style={{padding: 10, margin: 5}}>
                    <Button
                        onPress={this.goToWine}
                        title="Show Wines"
                        color="#841584"

                    />
                </View>

                <View style={{padding: 10, margin: 5}}>
                    <Button
                        onPress={this.goToUsers}
                        title="Show Customers"
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

});

