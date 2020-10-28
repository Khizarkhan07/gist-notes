import React, {createContext, useContext, useReducer} from "react";
import { gistReducer } from "../reducers/gists/GistReducer";

const initialState = {
  myData: [],
};
const GistsStore = createContext(initialState);
const { Provider } = GistsStore;

const GistsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gistReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export const GistContext = () => useContext(GistsStore);
export { GistsProvider };
