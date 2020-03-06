import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import getBudget from '../actions/index';

class BudgetTotals extends React.Component {

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    const { getBudget } = this.props;
    const { budget_id } = this.props.params;
    getBudget(token, budget_id);
  }

  render() {
    return (
      <div>
        <h1>Budgets Data</h1>
        {budget.budget_totals.map((budget_total) => (
          <div>
            <p>{budget_total.date}</p>
            <p>{budget_total.rent}</p>
            <p>{budget_total.transport}</p>
            <p>{budget_total.food}</p>
            <p>{budget_total.entertainment}</p>
            <p>{budget_total.utilities}</p>
            <p>{budget_total.other}</p>
          </div> 
        ))}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  budget: state.budgets.budget,
});

const mapDispatchToProps = dispatch => ({
  getBudget: (token, id) => dispatch(getBudget(token, id)),
});

BudgetTotals.propTypes = {
  getBudget: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsTotals);
