import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, Text, View, TextInput, Image, TouchableHighlight,Icon,ScrollView} from 'react-native';

const data = [
	{
		key: '1',
		title: 'Nemanja Ristic',
		description: 'bla bla',
	},
	{
		key: '2',
		title: 'Nemanja Ristic',
		description: 'bla bla bla',
	},
	{
		key: '3',
		title: 'Nemanja Ristic',
		description: 'bla bla bla bla',
	}
].map(d => Object.assign(d, {
 	image: {uri: 'http://facebook.github.io/react/img/logo_og.png'}
 }));

class WorkersAll extends Component {

    render() {
        const menuIcon = <Icon name="bars" size={23} color="#fff"/>;
           const generateItem = (i) => (
			<View style={styles.cell} key={i.key}>
				<TouchableHighlight onPress={this.props.onSelectItem}>
					<View style={styles.row}>
						<Image source={i.image} style={styles.cellImage} />
						<View style={styles.textContainer}>
							<Text style={styles.title} numberOfLines={2}>
								{i.title}
							</Text>
							<Text numberOfLines={1}>
								{i.description}
							</Text>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		);
		return (
			<ScrollView automaticallyAdjustContentInsets={false}>
				{data.map(generateItem)}
			</ScrollView>
		);
    }
}
WorkersAll.propTypes = {
	onSelectItem: React.PropTypes.func.isRequired
};

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
)(WorkersAll);


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
        textContainer: {
          		flex: 1,
          	},
        title: {
          		flex: 1,
          		fontSize: 16,
          		fontWeight: '500',
          		marginBottom: 2,
         },
       	row: {
          		alignItems: 'center',
          		backgroundColor: 'white',
          		flexDirection: 'row',
          		padding: 5,
          	},
        cellImage: {
          		backgroundColor: '#dddddd',
          		height: 60,
          		marginRight: 10,
          		width: 60,
        },
        cell: {
          		borderBottomWidth: StyleSheet.hairlineWidth
        }
});
module.exports = WorkersAll;