export interface IState {
  isLoginPending: boolean;
  loginError: string;
  token: string;
  isLogoutPending: boolean;
};

export interface ILoginPayload {
  email: string;
  password: string;
};
