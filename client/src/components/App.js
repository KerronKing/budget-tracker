import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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

class App extends React.Component {
  static loggedIn() {
    const token = localStorage.getItem('jwt');
    return !!token;
  }

  render() {
    return (
      <div className="App">
        { this.loggedIn
          ? (
            <div>
              <Footer />
            </div>
          )
          : (
            <div className="hidden">
              <Footer />
            </div>
          )}
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
  }
}

export default App;
