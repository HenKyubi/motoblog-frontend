// Libs
import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "./AppReducer";

// Types
import {
  AppState,
  PartialUserSession,
  UserSession,
} from "../interfaces/context.interface";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: AppState = {
  token: "",
  userSession: {} as UserSession,
  isLogged: false,
};

export const AppProvider = ({ children }: props) => {
  const [appState, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const setUserSession = (partialUserSession: PartialUserSession) => {
    dispatch({ type: "setUserSession", payload: partialUserSession });
  };

  const setIsLogged = (flag: boolean) => {
    dispatch({ type: "setIsLogged", payload: flag });
  };

  const closeSession = () => {
    dispatch({ type: "closeSession", payload: INITIAL_STATE });
  };

  const login = (appState: AppState) => {
    dispatch({ type: "login", payload: appState });
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        setUserSession,
        setIsLogged,
        closeSession,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
