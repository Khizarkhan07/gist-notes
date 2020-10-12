import React, {createContext, useReducer} from 'react';

const initialState = {
    gists: [{id: '1', userId: "1",  name: "Khizar", date: Date.now(), time: Date.now(), keyword: 'WebServer', noteBookName: 'server.xml'},
        {id: '2', userId: "2", name: "Will", date: Date.now(), time: Date.now(), keyword: 'WebServer', noteBookName: 'server.xml'},
        {id: '3', userId: "1",  name: "Khizar", date: Date.now(), time: Date.now(), keyword: 'WebServer', noteBookName: 'server.xml'}
    ]
}
const GistsStore = createContext(initialState);
const { Provider } = GistsStore;

const FETCH_GISTS = 'FETCH_GISTS';
const SEARCH_GISTS = 'SEARCH_GISTS';

const GistsProvider = ( { children } ) => {
    //seprateReducer
    const [state, dispatch] = useReducer((state, action) => {

        switch(action.type) {

            case FETCH_GISTS:
                return state;

            case SEARCH_GISTS:

                const result= state.gists.filter(gist => gist.name === action.payload.search);

                state.gists = result;

                return {...state};




            default:
                return state;
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { GistsStore, GistsProvider }