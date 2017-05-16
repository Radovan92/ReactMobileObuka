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
                        backgroundColor: '#841584',
                        justifyContent: 'space-between',
                        height: 40
                    }}>
                       <TouchableHighlight onPress={this.goBackToLogin.bind(this)} style={styles.rowElement}>

                            <View style={{padding: 13}}>
                                <Text style={{color: '#FFF'}}> Nazad </Text>
                            </View>
                        </TouchableHighlight>

                    <View>
                        <Text style={{fontSize: 19, padding: 10, color: '#fff'}}>HomeScreen.js</Text>
                    </View>              
                    <View>
                        <TouchableHighlight onPress={this.goBackToLogin.bind(this)} style={styles.rowElement}>

                            <View style={{padding: 13}}>
                                <Text style={{color: '#FFF'}}> Napred </Text>

                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
                <Text style={styles.welcome}>
                  Vinarija "Aleksandrija" Najbolja svetska vina!
                </Text>

                <View style={{padding: 10, margin: 5}}>
                    <Button
                        onPress={this.goToWine}
                        title="Prikazi Vina"
                        color="#841584"
                    />
                </View>

                <View style={{padding: 10, margin: 5}}>
                    <Button
                        onPress={this.goToUsers}
                        title="Prikazi Kupce"
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
  }
});

