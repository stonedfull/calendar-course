import { AuthActionCreators } from "./auth/Actions";
import { EventActionCreators } from "./event/actionCreators";

export interface IAction<Type extends string> {
  type: Type;
}
export interface IActionWithPayload<T extends string, Payload> {
  type: T;
  payload: Payload;
}

export const allActionCreators = { ...AuthActionCreators, ...EventActionCreators };
