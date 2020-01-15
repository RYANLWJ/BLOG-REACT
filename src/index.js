import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './redux';
import './index.css';
import './utils/common.css';
import {Home} from './pages/home/home';
import repo from './pages/repo/repo';
import signIn from './pages/signIn/signIn';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Provider store={store}>
        <Route path="/home" exact component={Home} />
        <Route path="/repo" exact component={repo} />
        <Route path="/signIn" exact component={signIn} />
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
