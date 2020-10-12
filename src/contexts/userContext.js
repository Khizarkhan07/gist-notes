import React, {createContext, useReducer} from 'react';

const initialState = {
    name: "Khizar", id:"1"
}
const UsersStore = createContext(initialState);
const { Provider } = UsersStore;


const UserProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        console.log(state)
        switch(action.type) {

            case 'Login':
                return state;
            case 'Logout' :
                state = {};
                return state


            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { UsersStore, UserProvider }