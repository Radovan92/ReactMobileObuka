import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../App/reducers';
import HomeScreen from '../App/components/HomeScreen';
import Login from '../App/components/Login';
import WineAll from '../App/components/WineAll';
import Root from '../App/Root';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}
