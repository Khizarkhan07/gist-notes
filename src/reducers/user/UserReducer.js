import { UserActionType } from "./ActionTypes";
import { getAuthenticatedUser } from "../../utils";

export const userReducer = (state, action) => {
  switch (action.type) {
    case UserActionType.CURRENT_USER: {
      const user = getAuthenticatedUser();
      return {
        ...state,
        name: user.login,
        id: user.id,
        avatar: user.avatar_url,
        url: user.html_url,
      };
    }
    case UserActionType.LOGIN:
      const user = action.payload;
      return { ...state, user };

    case UserActionType.LOGOUT:
      state = {};
      return state;

    default:
      return state;
  }
};
