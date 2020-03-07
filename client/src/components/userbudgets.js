import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getBudgets } from '../actions/index';

class UserBudgets extends React.Component {
  componentDidMount() {
    const { getBudgets } = this.props;
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    axios({ method: 'get', url: 'http://localhost:3001/api/v1/budgets', headers: { Authorization: token } })
      .then(response => {
        getBudgets(response.data);
      });
  }

  render() {
    const { budgets } = this.props;
    return (
      <div>
        <h1>Your Budgets</h1>
        {budgets.map(budget => (
          <div key={budget.id}>
            <div>
              <Link to={`/budgets/${budget.id}/budget_totals`}>Total</Link>
              <p>{budget.start_date}</p>
              <p>{budget.end_date}</p>
              <p>{budget.income}</p>
              <Link to={`${budget.id}/budget_totals/new`}>New total</Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budgets: state.budgets.all,
  name: state.users.name,
  email: state.users.email,
});

const mapDispatchToProps = dispatch => ({
  getBudgets: budgets => dispatch(getBudgets(budgets)),
});

UserBudgets.propTypes = {
  getBudgets = PropTypes.func.isRequired,
  budgets = PropTypes.shape({
    map: PropTypes.func.isRequired,
  })
}

UserBudgets.defaultProps = {
  budgets = PropTypes.instanceOf(Array),
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBudgets);
