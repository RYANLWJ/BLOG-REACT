import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "../redux";
import routeConfig from './routeConfig';
// import { Home } from "../pages/home/home";
// import repo from "../pages/repo/repo";
// import signIn from "../pages/signIn/signIn";

const history = createBrowserHistory();

const routes = () => (
  <Router history={history}>
    <Switch>
      <Provider store={store}>
        {renderRoutes(routeConfig)}
      </Provider>
    </Switch>
  </Router>
);

export default routes;
