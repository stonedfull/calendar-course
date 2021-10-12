import { User } from "../../../models/User";
import { AuthState } from "./types";
import { Actions, ActionTypes } from "./Actions";

const initialState: AuthState = {
  isAuth: false,
  error: "",
  isLoading: false,
  user: {} as User,
};

export default function authReducer(state = initialState, action: Actions): AuthState {
  switch (action.type) {
    case ActionTypes.SetIsAuth:
      return { ...state, isAuth: action.payload, isLoading: false };
    case ActionTypes.SetIsLoading:
      return { ...state, isLoading: action.payload };
    case ActionTypes.SetError:
      return { ...state, error: action.payload, isLoading: false };
    case ActionTypes.SetUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
