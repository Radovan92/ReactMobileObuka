/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, TouchableHighlight,Icon,Button} from 'react-native';

//TODO: add list of wines and pass params to navigator

class WineAll extends Component {
        constructor(props) {
            super(props);
            this.goToDetails = this.goToDetails.bind(this);
            this.goToHome = this.goToHome.bind(this);
        }

        goToHome() {
                this.props.navigator.pop();
            }

        goToDetails(){
            this.props.navigator.push({
            component: 'winedetails'
        });
        }
    render() {
        const menuIcon = <Icon name="bars" size={23} color="#fff"/>;
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.goToDetails}
                    title="Go to Wine details"
                    color="#841584"

                />
                <Button
                    onPress={this.goToHome}
                    title="Go back to Home"
                    color="#841584"

                />
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
)(WineAll);


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
    },
});

