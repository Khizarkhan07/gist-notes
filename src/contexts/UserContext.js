import React, {createContext, useReducer} from 'react';
import {userReducer} from "../reducers/user/UserReducer";

const initialState = {

}


const UsersStore = createContext(initialState);
const { Provider } = UsersStore;


const UserProvider = ( { children } ) => {
    const [state, userDispatch] = useReducer(userReducer, initialState);

    return <Provider value={{ state, userDispatch }}>{children}</Provider>;
};

export { UsersStore, UserProvider }