import { GistActionType } from "./ActionTypes";
import { searchGist } from "./gist.utils";

export const gistReducer = (state, action) => {
  switch (action.type) {
    case GistActionType.FETCH_GISTS:
      return { ...state, myData: action.payload };

    case GistActionType.SEARCH_GISTS:
      return {
        ...state,
        myData: searchGist(state.myData, action.payload.search),
      };
    case GistActionType.USER_GISTS:
      return { ...state, myData: action.payload };

    default:
      return state;
  }
};
