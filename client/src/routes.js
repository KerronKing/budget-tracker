import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import login from './components/login'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={login}/>
  </Route>
);
