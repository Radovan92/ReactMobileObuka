/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, TouchableHighlight,Button,Icon} from 'react-native';

class WineDetails extends Component {
        constructor(props) {
            super(props);
            this.goBackToAllWine = this.goBackToAllWine.bind(this);
        }


        goBackToAllWine() {
            this.props.navigator.pop();
        }
    render() {
        const menuIcon = <Icon name="bars" size={23} color="#fff"/>;
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.goBackToAllWine}
                    title="Go back to all Wines"
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
)(WineDetails);


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

