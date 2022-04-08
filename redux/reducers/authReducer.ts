import { authTypes, AuthActionTypes } from "../actionTypes/authActionTypes";

interface IState {
  user: null | { isAuth: boolean };
  loading: boolean;
  error: string | null;
}

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const authReducer = (
  state: IState = initialState,
  action: authTypes
): IState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_START:
      return { ...state, loading: true };

    case AuthActionTypes.AUTH_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case AuthActionTypes.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
