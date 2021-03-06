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
    const apiUrl = 'https://king-budget-api.herokuapp.com/';
    axios({ method: 'get', url: `${apiUrl}api/v1/budgets/${id}`, headers: { Authorization: token } })
      .then(response => {
        getBudget(response.data);
      });
  }

  render() {
    const { budget } = this.props;
    if (!budget) {
      return (
        <div>Budget data loading..</div>
      );
    }
    return (
      <div className="single-budget-area">
        <div className="header">
          <h2>Budget Tracker</h2>
        </div>
        <div key={budget.id} className="single-budgets">
          <div className="budget-name">
            <p className="b-content">{budget.name}</p>
          </div>
          <div className="details-wrapper">
            <div className="b-detail">
              <p className="desc">Start Date:</p>
              <p className="b-content">{budget.startdate}</p>
            </div>
            <div className="b-detail">
              <p className="desc">End Date:</p>
              <p className="b-content">{budget.enddate}</p>
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

Budget.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  getBudget: PropTypes.func.isRequired,
  budget: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startdate: PropTypes.string.isRequired,
    enddate: PropTypes.string.isRequired,
    income: PropTypes.number.isRequired,
  }),
};

Budget.defaultProps = {
  budget: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
