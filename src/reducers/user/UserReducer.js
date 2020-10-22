import {UserActionType} from "./ActionTypes";
import {isAuthenticated, logOut} from "../../utils";


export const userReducer = (state, action) => {
    switch(action.type) {
        case UserActionType.CURRENT_USER: {
            state.name= isAuthenticated().login;
            state.id= isAuthenticated().id;
            state.avatar= isAuthenticated().avatar_url;
            state.avatar= isAuthenticated().avatar_url;
            state.url= isAuthenticated().html_url;
            return state;
        }
        case UserActionType.LOGIN:
            console.log(action.payload)
            state = action.payload
            return state;

        case UserActionType.LOGOUT :
            logOut();
            state = {};
            return state


        default:
            return state;
    };
}