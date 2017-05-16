/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, 
        Image, Button, Alert, TouchableHighlight} from 'react-native';
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

    goToHomeScreen() {
        this.props.navigator.push({
            component: 'home' 
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
                       <TouchableHighlight onPress={this.goToHomeScreen.bind(this)} style={styles.rowElement}>

                            <View style={{padding: 13}}>
                                <Text style={{color: '#FFF'}}> Nazad </Text>
                            </View>
                        </TouchableHighlight>

                    <View>
                        <Text style={{fontSize: 19, padding: 10, color: '#FFF'}}>NewWine.js</Text>
                    </View>              


            </View>

                <Text style={styles.welcome}>
                   {'\n'}Novo Vino!{'\n'}
                </Text>

                <View style={styles.row}>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Ime'
                      placeholderTextColor="#d3d3d3"
                      />
                    </View>

                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Tip'
                      placeholderTextColor="#d3d3d3"
                      />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Dostava'
                      placeholderTextColor="#d3d3d3"
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Rasprodato'
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
                     title="Taster 1"
                     color="#841584"
                    />
                    </View>
                    <View style={styles.buttons}>
                    <Button
                     onPress={onButtonPress}
                     title="Taster 2"
                     color="#841584"
                    />
                    </View>
                    <View style={styles.buttons}>
                    <Button style={styles.buttons}
                     onPress={onButtonPress}
                     title="Taster 3"
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
        backgroundColor: '#FFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
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
        marginRight: 5,
        padding: 10,
    },
    textInputWrapper: {
        flex: 1,
         height: 40,
         //width: 100,
         borderColor:'black',
         backgroundColor: '#841584',
         borderWidth: 1,
         marginRight: 2,
     },
     textInput:{
      flex:1,
     },
     buttons:{
      flex:1,
      padding: 5,
      //marginRight: 3,
      //marginLeft: 3,
     }
});
