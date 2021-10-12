import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { User } from "../../../models/User";
import { IActionWithPayload } from "../actionCreators";

export enum ActionTypes {
  SetUser = "auth:setUser",
  SetIsAuth = "auth:setIsAuth",
  SetIsLoading = "auth:setIsLoading",
  SetError = "auth:setError",
  Login = "auth:login",
  Logout = "auth:logout",
}

export type Actions = SetUser | SetIsAuth | SetIsLoading | SetError;

// region SetUser
export type SetUser = IActionWithPayload<ActionTypes.SetUser, User>;

export const setUser = (payload: SetUser["payload"]): SetUser => ({ type: ActionTypes.SetUser, payload });

export const isSetUser = (a: Actions): a is SetUser => a.type === ActionTypes.SetUser;
// endregion

// region SetIsAuth
export type SetIsAuth = IActionWithPayload<ActionTypes.SetIsAuth, boolean>;

export const setIsAuth = (payload: SetIsAuth["payload"]): SetIsAuth => ({ type: ActionTypes.SetIsAuth, payload });

export const isSetIsAuth = (a: Actions): a is SetIsAuth => a.type === ActionTypes.SetIsAuth;
// endregion

// region SetIsLoading
export type SetIsLoading = IActionWithPayload<ActionTypes.SetIsLoading, boolean>;

export const setIsLoading = (payload: SetIsLoading["payload"]): SetIsLoading => ({
  type: ActionTypes.SetIsLoading,
  payload,
});

export const isSetIsLoading = (a: Actions): a is SetIsLoading => a.type === ActionTypes.SetIsLoading;
// endregion

// region SetError
export type SetError = IActionWithPayload<ActionTypes.SetError, string>;

export const setError = (payload: SetError["payload"]): SetError => ({ type: ActionTypes.SetError, payload });

export const isSetError = (a: Actions): a is SetError => a.type === ActionTypes.SetError;
// endregion

// region Login
export const login = (form: User) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const response = await UserService.getUsers();
      const mockUser = response.data.find(
        ({ username, password }) => username === form.username && password === form.password,
      );
      if (mockUser) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("username", mockUser.username);
        dispatch(setUser(mockUser));
        dispatch(setIsAuth(true));
      } else {
        dispatch(setError("Username or password is wrong!"));
      }
      dispatch(setIsLoading(false));
    }, 1000);
  } catch (e) {
    dispatch(setError("Something went wrong!"));
  }
};
// endregion

// region Logout
export const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem("auth");
  localStorage.removeItem("username");
  dispatch(setUser({} as User));
  dispatch(setIsAuth(false));
};
// endregion

export const AuthActionCreators = {
  setUser,
  setIsAuth,
  setIsLoading,
  setError,
  login,
  logout,
};
