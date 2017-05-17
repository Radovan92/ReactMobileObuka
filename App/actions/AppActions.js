import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const Type = {
    LOGIN_REST_CALL: 'LOGIN_REST_CALL',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT',
    GET_USERS: 'GET_USERS',
    USER_FETCH_SUCCESS: 'USER_FETCH_SUCCESS',
    USER_FETCH_FAIL: 'USER_FETCH_FAIL',
    GET_WINES: 'GET_WINES',
    WINES_FETCH_SUCCESS: 'WINES_FETCH_SUCCESS',
    WINES_FETCH_FAIL: 'WINES_FETCH_FAIL'

};

export function loginRestCall(username, password) {
    return (dispatch) => {

        dispatch({
            type: Type.LOGIN_REST_CALL
        });

        axios.post('http://agrolife.greensoft.co/login', {
            username: username,
            password: password
        })
        .then(function (response) {
            dispatch({
                type: Type.LOGIN_SUCCESS,
                data: response.data
            });
        })
        .catch(function (error) {
            console.log('error');
            dispatch({
                type: Type.LOGIN_FAILED
            });
        });
    }
}


export function getUsers() {
    return (dispatch) => {

        dispatch({
            type: Type.GET_USERS
        });

        axios.get('http://10.4.31.42:8081/App/json/users.json')
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: Type.USER_FETCH_SUCCESS,
                    data: response.data
                });
            })
            .catch(function (error) {
                console.log('error: ' + JSON.stringify(err));
                dispatch({
                    type: Type.USER_FETCH_FAIL
                });
            });
    }
}

export function getWines() {
    return (dispatch) => {

        dispatch({
            type: Type.GET_WINES
        });

        axios.get('http://10.4.31.42:8081/App/json/wines.json')
            .then(function (response) {
                dispatch({
                    type: Type.WINES_FETCH_SUCCESS,
                    data: response.data
                });
            })
            .catch(function (error) {
                console.log('error');
                dispatch({
                    type: Type.WINES_FETCH_FAIL
                });
            });
    }
}

export function logout() {
    return (dispatch) => {
        dispatch({
            type: Type.LOGOUT
        });
    }
}








