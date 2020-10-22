import {GistActionType} from "./ActionTypes";

export const gistReducer = (state, action) => {
    switch(action.type) {

        case GistActionType.FETCH_GISTS:
            return {...state, myData: action.payload}

        case GistActionType.SEARCH_GISTS:

            const result= state.myData.filter(gist => gist.owner.login === action.payload.search);

            return {...state, myData:result};
        case GistActionType.USER_GISTS:

            return {...state, myData:action.payload};

        default:
            return state;
    };
}