import immutable from 'seamless-immutable';
import { Type as AppActionType } from '../actions/AppActions';

const INITIAL_STATE = immutable({
    username: '',
    password: '',
    token: null,
    loggedIn: false,
    logInFailed: false,
    wines: [],
    getUsersFailed: false
});

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        // LOGIN
        case AppActionType.LOGIN_REST_CALL:
            console.log('LOGIN_REST_CALL');
            let checkingCredentials = true;
            return state.merge({checkingCredentials});
            break;

        case AppActionType.LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS' + action.data.token);
            let token = action.data.token;
            let loggedIn = true;
            return state.merge({token, loggedIn});
            break;

        case AppActionType.LOGIN_FAILED:
            console.log('LOGIN_FAILED');
            let logInFailed = true;
            return state.merge({logInFailed});
            break;

        case AppActionType.GET_USERS:
            console.log("Getting users...");
            return state.merge({checkingCredentials});
            break;

        case AppActionType.USER_FETCH_SUCCESS:
            console.log('USER FETCHED');
            let wines = action.data;
            return state.merge({wines});
            break;

        case AppActionType.USER_FETCH_FAIL:
            console.log('GET USER FAILED');
            let getUsersFailed = true;
            return state.merge({getUsersFailed});
            break;

        default:
            return state;
    }
}