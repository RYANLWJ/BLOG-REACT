import React from 'react';

import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import store from './store';




export default function({history}){
  return( 
  <Router history={history}>
    <Switch>
      <Provider store={store}>
        <Route path="/home" exact component={App} />
      </Provider>
    </Switch>
  </Router>)
}