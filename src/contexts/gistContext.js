import React, {createContext, useReducer} from 'react';
import {getGists} from "../utils/clientApi";

const initialState = {
    myData: []
}
const GistsStore = createContext(initialState);
const { Provider } = GistsStore;

const FETCH_GISTS = 'FETCH_GISTS';
const SEARCH_GISTS = 'SEARCH_GISTS';
const USER_GISTS = 'USER_GISTS';

const GistsProvider = ( { children } ) => {
    //seprateReducer
    const [state, dispatch] = useReducer((state, action) => {

        switch(action.type) {

            case FETCH_GISTS:
                return {...state, myData: action.payload}

            case SEARCH_GISTS:

                const result= state.myData.filter(gist => gist.owner.login === action.payload.search);

                return {...state, myData:result};
            case USER_GISTS:

                return {...state, myData:action.payload};

            default:
                return state;
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { GistsStore, GistsProvider }