import { ComponentType } from "react";
import { Event } from "../pages/Event";
import { Login } from "../pages/Login";

export enum RouteNames {
  Login = "calendar-course/login",
  Event = "calendar-course/",
}

export interface Route {
  path: RouteNames;
  component: ComponentType;
  exact?: boolean;
}

export const publicRoutes: Route[] = [{ path: RouteNames.Login, exact: true, component: Login }];

export const privateRoutes: Route[] = [{ path: RouteNames.Event, exact: true, component: Event }];
