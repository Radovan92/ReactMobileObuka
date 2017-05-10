/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, 
        Text, View, TextInput, 
        Image, TouchableHighlight, 
        Icon, Button} from 'react-native';

class WineAll extends Component {
    constructor(props){
        super(props);
        this.goOneStepBack = this.goOneStepBack.bind(this);
    }

    goOneStepBack() {
        // this.props.navigator.push({
        //     component: 'login'
        // });
        this.props.navigator.pop();
    };


    render() {
        const menuIcon = <Icon name="bars" size={23} color="#fff"/>;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    Ovo bi trebala da bude stranica za prikaz svih vina iz koje treba da se izabere neko vino i prikazu detalji
                </Text>
                 <View style={{padding: 20, margin: 10}}>
                    <Button
                        onPress={this.goOneStepBack}
                        title="Go back one level"
                        color="#841584" />
                    </View>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
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
)(WineAll);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

