import {ActionReducer,  Action} from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function userReducer(state = null, action) {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return null;
        default:
            return state;
    }
}