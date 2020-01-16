import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "../redux";
import { Home } from "../pages/home/home";
import repo from "../pages/repo/repo";
import signIn from "../pages/signIn/signIn";

const history = createBrowserHistory();

const routes = () => (
  <Router history={history}>
    <Switch>
      <Provider store={store}>
        <Route path="/home" exact component={Home} />
        <Route path="/repo" exact component={repo} />
        <Route path="/signIn" exact component={signIn} />
      </Provider>
    </Switch>
  </Router>
);

export default routes;
