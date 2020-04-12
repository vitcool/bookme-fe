import IUser from "models/User";

export interface IState {
  isLoginPending: boolean;
  loginError: string;
  token: string;
  isLogoutPending: boolean;
  signupError: string;
  isSignUpPending: boolean;
  user: IUser | null;
};

export interface ILoginPayload {
  email: string;
  password: string;
};

export interface ISuccess {
  token: string;
  user: IUser;
}
