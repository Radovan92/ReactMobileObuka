import React, {Component} from 'react';
import {
    Navigator, Text, TouchableHighlight, AsyncStorage,
    Menu, BackAndroid, NetInfo
} from 'react-native';
import {setTokenInReducer} from './actions/AppActions';
import {connect} from 'react-redux';
import Login from './components/Login';
import HomeScreen from './components/HomeScreen';
import WineAll from './components/WineAll';
import WineDetail from './components/WineDetails';
import UsersAll from './components/UsersAll';

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "John Doe"
        }
    }


    // _handleConnectionChange = (isConnected) => {
    //     this.props.changeConnectionStatus(isConnected);
    // };

    navigatorRenderScene(route, navigator) {
        switch (route.component) {
            case 'login':
                return <Login navigator={navigator} {...route.passProps}/>;
            case 'home':
                return <HomeScreen navigator={navigator} {...route.passProps}/>;
            case 'wine':
                return <WineAll navigator={navigator} {...route.passProps}/>;
            case 'wineDetail':
                return <WineDetail navigator={navigator} {...route.passProps}/>;
            case 'usersall':
                return <UsersAll navigator={navigator} {...route.passProps} />;
            default:
                return <Login/>;
        }
    }

    render() {
        const routes = [
            {title: 'Login', component: 'login'},
            {title: 'Home', component: 'home'},
            {title: 'All wines',component: 'wine'},
            {title: 'Wine details',component: 'winedetails'}
        ];
        let firstPageToServe = 0;


        return (
            <Navigator initialRoute={routes[firstPageToServe]}
                       initialRouteStack={routes}
                       renderScene={this.navigatorRenderScene}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: null
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setTokenInReducer: (token) => dispatch(setTokenInReducer(token))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
