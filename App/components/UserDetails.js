/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';

class UserDetails extends Component {

    constructor(props) {
        super(props);

        this.goOneStepBack = this.goOneStepBack.bind(this);

    }

    goOneStepBack() {
        this.props.navigator.pop();
    };

    render() {
        let userFirstName = [];
        let userLastName = [];
        let userEmail = [];
        let userUsername = [];
        userFirstName.push(
            this.props.user.firstName
        );
        userLastName.push(
            this.props.user.lastName
        );
        userEmail.push(this.props.user.email);
        userUsername.push(this.props.user.username);

        return (
            <View style={styles.container}>
                <View style={{padding: 10, margin: 5}}>
                    <Button
                        onPress={this.goOneStepBack}
                        title="Go back"
                        color="#841584"

                    />
                </View>
                <Text style={styles.welcome}>
                    First Name: {userFirstName}
                </Text>
                <Text style={styles.welcome}>
                    Last Name: {userLastName}
                </Text>
                <Text style={styles.welcome}>
                    Email: {userEmail}
                </Text>
                <Text style={styles.welcome}>
                    Username: {userUsername}
                </Text>

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
)(UserDetails);


const styles = StyleSheet.create({
    container: {
        flex: 1,
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