import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Homepage from './home-page';
import Login from './login';
import Logout from './logout';
import Signup from './signup';
import UserProfile from './userprofile';
import UserBudgets from './userbudgets';
import NewBudget from './newbudget';
import NewTotal from './newtotal';
import BudgetTotals from './budget_totals';
import './App.css';
import Footer from './footer';

const App = ({ loggedIn }) => {
  let footer;
  if (loggedIn) {
    footer = <Footer />;
  }
  return (
    <div className="App">
      {footer}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/budgets" component={UserBudgets} />
        <Route exact path="/budgets/new" component={NewBudget} />
        <Route exact path=":budgetId/budgetTotals/new" component={NewTotal} />
        <Route exact path="/budgets/:budgetId/budget_totals" component={BudgetTotals} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.status.status,
});

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(App);
