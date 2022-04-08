import {
  AuthActionTypes,
  IAuthError,
  IAuthStart,
  IAuthSuccess,
} from "../actionTypes/authActionTypes";

export const authStart = (): IAuthStart => {
  return {
    type: AuthActionTypes.AUTH_START,
    payload: true,
  };
};

export const authSuccess = (): IAuthSuccess => {
  return {
    type: AuthActionTypes.AUTH_SUCCESS,
    payload: { isAuth: true },
  };
};

export const authError = (): IAuthError => {
  return {
    type: AuthActionTypes.AUTH_ERROR,
    payload: "mm error wtf?",
  };
};
