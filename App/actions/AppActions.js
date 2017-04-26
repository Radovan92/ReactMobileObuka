import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const Type = {
    LOGIN_REST_CALL: 'LOGIN_REST_CALL',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT'
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

export function logout() {
    return (dispatch) => {
        dispatch({
            type: Type.LOGOUT
        });
    }
}







