// Types
import { AppState, PartialUserSession } from "../interfaces/context.interface";

type AppAction =
  | { type: "setUserSession"; payload: PartialUserSession }
  | { type: "setIsLogged"; payload: boolean }
  | { type: "closeSession"; payload: AppState }
  | { type: "login"; payload: AppState };

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "setUserSession":
      return {
        ...state,
        ...action.payload,
      };

    case "setIsLogged":
      return {
        ...state,
        isLogged: action.payload,
      };

    case "closeSession":
      return {
        ...action.payload,
      };

    case "login":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
