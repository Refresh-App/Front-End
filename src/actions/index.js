import axios from "axios";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = creds => dispatch => {
    console.log(creds);
    dispatch({type: SIGNUP_START});
    return axios 
    .post('https://apidevnow.com/register', creds)
    .then(res => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: SIGNUP_FAILURE, payload: err.response.data.errors})
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
    dispatch ({type: LOGIN_START});
    return axios 
    .post('https://apidevnow.com/login', creds)
    .then(res => {
        localStorage.setItem("token", res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
    })
    .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.response.data})
    })

}