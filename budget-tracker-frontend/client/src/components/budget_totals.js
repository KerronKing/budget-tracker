import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTotals } from '../actions/index';

class BudgetTotals extends React.Component {
  componentDidMount() {
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    const { match: { params: { budgetId } } } = this.props;
    const { getTotals } = this.props;
    const apiUrl = 'https://king-budget-api.herokuapp.com/';
    axios({ method: 'get', url: `${apiUrl}api/v1/budgets/${budgetId}/budget_totals`, headers: { Authorization: token } })
      .then(response => {
        getTotals(response.data);
      });
  }

  render() {
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    const { budgetTotals } = this.props;
    const { match: { params: { budgetId } } } = this.props;
    const apiUrl = 'https://king-budget-api.herokuapp.com/';
    return (
      <div className="totals">
        <div className="header">
          <h2>Budget Tracker</h2>
        </div>
        <div className="totals-area">
          { budgetTotals.map(budgetTotal => (
            <div key={budgetTotal.id} className="each-total">
              <div className="total-detail">
                <p>
                  Date:
                  <span className="date-span">
                    {budgetTotal.date}
                  </span>
                </p>
              </div>
              <div className="total-detail">
                <p>
                  Rent:
                  <span>
                    {budgetTotal.rent}
                  </span>
                </p>
              </div>
              <div className="total-detail">
                <p>
                  Transport:
                  <span>
                    {budgetTotal.transport}
                  </span>
                </p>
              </div>
              <div className="total-detail">
                <p>
                  Food:
                  <span>
                    {budgetTotal.food}
                  </span>
                </p>
              </div>
              <div className="total-detail">
                <p>
                  Entertainment:
                  <span>
                    {budgetTotal.entertainment}
                  </span>
                </p>
              </div>
              <div className="total-detail">
                <p>
                  Utilities:
                  <span>
                    {budgetTotal.utilities}
                  </span>
                </p>
              </div>
              <div className="total-detail">
                <p>
                  Other expenses:
                  <span>
                    {budgetTotal.other}
                  </span>
                </p>
              </div>
              <div className="total-detail">
                <button
                  type="submit"
                  onClick={() => axios({
                    method: 'delete',
                    url: `${apiUrl}api/v1/budgets/${budgetId}/budget_totals/${budgetTotal.id}`,
                    headers: { Authorization: token },
                  })
                    .then(() => window.location.reload(false))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budgetTotals: state.totals.all,
});

const mapDispatchToProps = dispatch => ({
  getTotals: totals => dispatch(getTotals(totals)),
});

BudgetTotals.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  getTotals: PropTypes.func.isRequired,
  budgetTotals: PropTypes.arrayOf(
    PropTypes.shape({
      rent: PropTypes.number.isRequired,
    }),
  ),
};

BudgetTotals.defaultProps = {
  budgetTotals: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetTotals);
