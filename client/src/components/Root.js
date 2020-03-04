import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Login from './login';
import UserBudgets from './userbudgets';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
    <Router>
      <Route path="/login" component={Login} />
    </Router>
    <Router>
      <Route path="/users/:user_id/budgets" component={UserBudgets} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
console.log(Root);
