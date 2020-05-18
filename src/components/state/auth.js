import { auth, logIn, logOut } from "../../axios/getAPI";
import { stopSubmit } from 'redux-form';

const SetAuth = 'SET_AUTH_DATA';

let InitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const AuthReduser = (state = InitialState, action) => {
    switch (action.type) {
        case SetAuth:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
};

export const setAuthData = (id, email, login, isAuth) => ({ type: SetAuth, data: { id, email, login, isAuth } });

export const AuthThink = () => async (dispatch) => {
    let data = await auth();
    if (data.resultCode === 0) {
        let { id, login, email } = data.data
        dispatch(setAuthData(id, email, login, true));
    }
};


export const LoginThunk = (email, password, rememberMe) => async (dispatch) => {

    let data = await logIn(email, password, rememberMe);
    if (data.data.resultCode === 0) {
        dispatch(AuthThink())
    } else {
        let errorMessage = (data.data.messages.length > 0) ? data.data.messages[0] : 'Some error';
        dispatch(stopSubmit('loginForm', { _error: errorMessage }))
    }
}

export const LogOutThunk = () => async (dispatch) => {
    let response = await logOut();
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}

export default AuthReduser;