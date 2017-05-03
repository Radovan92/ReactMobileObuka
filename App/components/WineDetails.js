import { StyleSheet,View, Text } from 'react-native';
import React, { Component } from 'react';


class WineDetails extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>details</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    }
});


export default WineDetails;
