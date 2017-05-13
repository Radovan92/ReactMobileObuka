/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, Button,Alert} from 'react-native';
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

class NewWine extends Component {
        constructor(props) {
            super(props);
            this.goToAllWines = this.goToAllWines.bind(this);
        }

    goToAllWines() {
      this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    New Wine!
                </Text>
                    <View style={{padding: 10, margin: 5}}>
                     <Button
                     onPress={this.goToAllWines}
                     title="Go back"
                     color="#841584"

                    />
                    </View>
                <View style={styles.row}>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Name'
                      placeholderTextColor="#d3d3d3"
                      />
                    </View>

                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Type'
                      placeholderTextColor="#d3d3d3"
                      />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Delivery type'
                      placeholderTextColor="#d3d3d3"
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Sold out'
                      placeholderTextColor="#d3d3d3"
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='ID'
                      placeholderTextColor="#d3d3d3"
                      />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.buttons}>
                    <Button
                     onPress={onButtonPress}
                     title="1"
                     color="#841584"
                    />
                    </View>
                    <View style={styles.buttons}>
                    <Button
                     onPress={onButtonPress}
                     title="2"
                     color="#841584"
                    />
                    </View>
                    <View style={styles.buttons}>
                    <Button style={styles.buttons}
                     onPress={onButtonPress}
                     title="3"
                     color="#841584"
                    />
                    </View>
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
)(NewWine);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
        padding: 10,
    },
    textInputWrapper: {
         height: 40,
         width: 100,
         borderColor:'#841584',
         borderWidth: 1,
     },
     textInput:{
      flex:1,
     },
     buttons:{
      flex:1,
      padding: 5
     }
});

