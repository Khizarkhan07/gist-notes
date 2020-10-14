import React, {createContext, useReducer} from 'react';
import {isAuthenticated} from "../utils/sessionStorage";


const initialState = {

}


const UsersStore = createContext(initialState);
const { Provider } = UsersStore;

const LOGIN = 'Login';
const LOGOUT = 'Logout';
const UserProvider = ( { children } ) => {
    const [state, userDispatch] = useReducer((state, action) => {

        switch(action.type) {
            case 'Current_User': {
                console.log("current",isAuthenticated());
                state.name= isAuthenticated().login;
                state.id= isAuthenticated().id;
                state.avatar= isAuthenticated().avatar_url;
                state.avatar= isAuthenticated().avatar_url;
                state.url= isAuthenticated().html_url;
                return state;
            }
            case LOGIN:
                console.log(action.payload)
                state = action.payload
                return state;

            case LOGOUT :
                state = {};
                return state


            default:
                return state;
        };
    }, initialState);

    return <Provider value={{ state, userDispatch }}>{children}</Provider>;
};

export { UsersStore, UserProvider }