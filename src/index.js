import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './redux';
import './index.css';
import './utils/common.css';
import App from './App';
import repo from './pages/repo/repo';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Provider store={store}>
        <Route path="/home" exact component={App} />
        <Route path="/repo" exact component={repo} />
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
