export interface IState {
  isLoginPending: boolean;
  loginError: string;
  token: string;
};

export interface ILoginPayload {
  email: string;
  password: string;
};
