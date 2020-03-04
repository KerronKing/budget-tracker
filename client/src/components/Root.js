import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Login from './login';
import Signup from './signup';
import UserProfile from './userprofile';
import UserBudgets from './userbudgets';
import NewBudget from './newbudget';
import NewTotal from './newtotal';
import BudgetTotals from './total';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
    <Router>
      <Route path="/login" component={Login} />
    </Router>
    <Router>
      <Route path="/users" component={Signup} />
    </Router>
    <Router>
      <Route path="/users/:id" component={UserProfile} />
    </Router>
    <Router>
      <Route path="/users/:user_id/budgets" component={UserBudgets} />
    </Router>
    <Router>
      <Route path="/users/:user_id/budgets" component={NewBudget} />
    </Router>
    <Router>
      <Route path="/budgets/:budget_id/budget_total" component={NewTotal} />
    </Router>
    <Router>
      <Route path="/budgets/:budget_id/budget_total/:id" component={BudgetTotals} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
console.log(Root);
