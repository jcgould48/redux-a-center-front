import { SIGN_UP, LOGIN, LOGOUT } from '../constants/authUserConstant';

import {
    AUTH_USER_LOGGED_IN_SUCCESSFUL,
    // AUTH_USER_LOGOUT,
  } from "../actionTypes/authUserActionType";
  

const initialState = {
    isAuthenticated: false,
    user: null,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
        return {
            ...state,
        };
        case AUTH_USER_LOGGED_IN_SUCCESSFUL:
            return {
                isAuthenticated: true,
                user: { 
                    username: action.payload.username,
                    email: action.payload.email
                },
            };

        case LOGOUT:
            return {
            ...state,
            isAuthenticated: false,
            user: null
            }
            
        default:
        return state;
    }
}