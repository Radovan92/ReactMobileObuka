/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';

class WineDetails extends Component {

    constructor(props) {
        super(props);

        this.goOneStepBack = this.goOneStepBack.bind(this);

    }

    goOneStepBack() {
        this.props.navigator.pop();
    };

    render() {
        let wineName = [];
        let wineType = [];
        let wineContact = [];
        let wineSold = [];
        wineName.push(
            this.props.wine.name
        );
        wineType.push(
            this.props.wine.type
        );
        wineContact.push(this.props.wine.deliveryContact);
        wineSold.push(this.props.wine.soldOut);

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
                    Name: {wineName}
                </Text>
                <Text style={styles.welcome}>
                    Type: {wineType}
                </Text>
                <Text style={styles.welcome}>
                    Delivery Contact: {wineContact}
                </Text>
                {/*<Text style={styles.welcome}>*/}
                {/*Sold out: {wineSold}*/}
                {/*</Text>*/}

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