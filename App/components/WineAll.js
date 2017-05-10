/**
 * Created by basskibo on 26.4.17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getWines} from '../actions/AppActions';

import {loginRestCall} from '../actions/AppActions';
import {StyleSheet, 
        Text, View, TextInput, 
        Image, TouchableHighlight,
    Icon, Button, ListView
} from 'react-native';

class WineAll extends Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.goOneStepBack = this.goOneStepBack.bind(this);
        this.state = {
            dataSource: ds.cloneWithRows(this.props.wines)
        }
    }

    componentWillMount() {
        this.props.getWines();

    }


    componentWillReceiveProps(nextProps) {

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.wines)
        }, function () {
            console.log('Sacekao podatke pre rendera');
            //bez ovoga ne radi...
        });
    }


    renderRow(rowData, sectionID, rowID) {

        return <TouchableHighlight onPress={this.onPressRow.bind(this, rowData)}>
            <View style={styles.row}>
                <Text style={styles.text}>
                    {rowData.name}
                </Text>
            </View>
        </TouchableHighlight>
    }

    onPressRow(rowData) {
        console.log('onPressRow: rowData.id: ' + rowData.id);
        // let selectedMachine = {id_pogonska_masina: rowData.id, naziv: rowData.naziv};
        // this.props.setSelectedMachine(selectedMachine);
        this.props.navigator.push({
            title: 'Novi radni nalog',
            component: 'wineDetail',
            passProps: {wine: rowData}
        });
    }


    goOneStepBack() {
        // this.props.navigator.push({
        //     component: 'login'
        // });
        this.props.navigator.pop();
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={{padding: 10, margin: 5}}>
                    <Button
                        onPress={this.goOneStepBack}
                        title="Go back"
                        color="#841584"

                    />
                </View>
                <ListView
                    style={styles.listView}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
                />


            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        wines: state.appReducer.wines,
        machinesFetching: state.appReducer.machinesFetching,
        machinesFetchingFailed: state.appReducer.machinesFetchingFailed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getWines: () => dispatch(getWines())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WineAll);


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    row: {
        flexDirection: 'row',
        marginRight: 10,
        padding: 15
    }, separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E'
    },
});

