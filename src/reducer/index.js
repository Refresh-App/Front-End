import {SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions";

const initialState ={
    signingUp: false,
    loggingIn: false,
    token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGNUP_START:
            return{
                ...state,
                signingUp: true
            };
        case SIGNUP_SUCCESS:
            return{
                ...state,
                signingUp: false,
            };
        case SIGNUP_FAILURE:
            return{
                ...state,
                signingUp: false,
                error: action.payload
            };
        case LOGIN_START:
            return{
                ...state,
                loggingIn: false,
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                loggingIn: false,
                token: action.payload
            };
        case LOGIN_FAILURE:
            return{
                ...state, 
                loggingIn: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default reducer
