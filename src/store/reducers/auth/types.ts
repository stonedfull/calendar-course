import { User } from "../../../models/User";

export interface AuthState {
  isAuth: boolean;
  user: User;
  isLoading: boolean;
  error: string;
}
