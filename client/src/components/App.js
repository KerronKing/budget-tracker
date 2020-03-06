import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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
  loggedIn() {
    const token = localStorage.getItem("jwt");
    return token ? true : false; 
  }

  render() {
    return (
      <div className="App">
        Testing the routes
        <h1>Budget Tracker</h1>
        { this.loggedIn() ?
          <div>
            <div>
              <Link to='/logout'>logout</Link> 
            </div>
            <div>
              <Footer />
            </div> 
          </div>
          :
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
          </div> 
        }
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/users/:id" component={UserProfile} />
          <Route exact path="/budgets" component={UserBudgets} />
          <Route exact path="/budgets/new" component={NewBudget} />
          <Route exact path="/budget_totals/new" component={NewTotal} />
          <Route exact path="/budgets/:budget_id/budget_totals" component={BudgetTotals} />
        </Switch>
      </div>
    );
  }
}

export default App;
