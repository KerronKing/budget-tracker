import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getBudget } from '../actions/index';

class Budget extends React.Component {
  componentDidMount() {
    const { getBudget } = this.props;
    const { match: { params: { id } } } = this.props;
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    axios({ method: 'get', url: `http://localhost:3001/api/v1/budgets/${id}`, headers: { Authorization: token } })
      .then(response => {
        getBudget(response.data);
      });
  }

  render() {
    const { budget } = this.props;
    return (
      <div className="user-budgets">
        <h2>Budget Tracker</h2>
        <div key={budget.id} className="budget-details">
          <div className="budget-name">
            <p className="b-content">{budget.name}</p>
          </div>
          <div className="details-wrapper">
            <div className="b-detail">
              <p className="desc">Start Date:</p>
              <p className="b-content">{budget.start_date}</p>
            </div>
            <div className="b-detail">
              <p className="desc">End Date:</p>
              <p className="b-content">{budget.end_date}</p>
            </div>
            <div className="b-detail">
              <p className="desc">Income:</p>
              <p className="b-content">{budget.income}</p>
            </div>
            <div className="b-detail links">
              <div>
                <Link to={`/budgets/${budget.id}/budgetTotals`}>Totals</Link>
              </div>
              <div>
                <Link to={`${budget.id}/budgetTotals/new`}>New total</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budgets.budget,
});

const mapDispatchToProps = dispatch => ({
  getBudget: budget => dispatch(getBudget(budget)),
});

UserBudgets.propTypes = {
  getBudget: PropTypes.func.isRequired,
  budget: PropTypes.instanceOf(Object),
};

UserBudgets.defaultProps = {
  budgets: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBudgets);
