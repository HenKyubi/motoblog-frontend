// Libs
import { createContext } from "react";

// Types
import { AppState, PartialUserSession } from "../interfaces/context.interface";

export type AppContextProps = {
  appState: AppState;
  setUserSession: (partialUserSession: PartialUserSession) => void;
  setIsLogged: (flag: boolean) => void;
  closeSession: () => void;
  login: (appState: AppState) => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
