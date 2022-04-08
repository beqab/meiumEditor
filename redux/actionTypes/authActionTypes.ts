export interface IAuthStart {
  type: AuthActionTypes.AUTH_START;
  payload: boolean;
}

export interface IAuthSuccess {
  type: AuthActionTypes.AUTH_SUCCESS;
  payload: { isAuth: true };
}

export interface IAuthError {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string;
}

export type authTypes = IAuthStart | IAuthSuccess | IAuthError;

export enum AuthActionTypes {
  AUTH_START = "auth_start",
  AUTH_SUCCESS = "auth_success",
  AUTH_ERROR = "AUTH_ERROR",
}
