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

class EditWine extends Component {
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
                    Edit Wine!
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
                      multiline={true}
                      placeholderTextColor="#d3d3d3"
                      value={this.props.wine.name}
                      />
                    </View>

                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Type'
                      multiline={true}
                      placeholderTextColor="#d3d3d3"
                      value={this.props.wine.type}
                      />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Delivery contact'
                      multiline={true}
                      placeholderTextColor="#d3d3d3"
                      value={this.props.wine.deliveryContact}
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='Sold out'
                      placeholderTextColor="#d3d3d3"
                      value={this.props.wine.soldOut.toString()}
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <TextInput style={styles.textInput}
                      placeholder='ID'
                      placeholderTextColor="#d3d3d3"
                      value={this.props.wine.id.toString()}
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
)(EditWine);


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
         height: 60,
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

