import { ReactElement } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

export const AppRouter = (): ReactElement => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to={RouteNames.Event} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to={RouteNames.Login} />
    </Switch>
  );
};
