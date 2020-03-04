import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import UserProfile from './userprofile';
import UserBudgets from './userbudgets';
import NewBudget from './newbudget';
import NewTotal from './newtotal';
import BudgetTotals from './total';
import './App.css';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          Testing the routes
          <h1>Budget Tracker</h1>
          <Footer />
          <Switch>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/user" component={UserProfile} />
            <Route path="/users/budgets" component={UserBudgets} />
            <Route path="/budgets/new" component={NewBudget} />
            <Route path="/budget_totals/new" component={NewTotal} />
            <Route path="/budget_totals" component={BudgetTotals} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
