export interface AppState {
  token: string;
  userSession: UserSession;
  isLogged: boolean;
}

export interface UserSession {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  username: string;
}

export interface PartialUserSession {
  firstName?: string;
  lastName?: string;
  country?: string;
  phoneNumber?: string;
  username?: string;
}
