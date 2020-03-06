import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import getBudgets from '../actions/index';

class UserBudgets extends React.Component {

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    const { getBudgets } = this.props;
    getBudgets(token);
  }

  render() {
    const { budgets } = this.props;
    return (
      <div>
        <h1>Your Budgets</h1>
        {budgets.map(budget => (
          <Link to={"/budgets/" + budget.id + "/budget_totals"}>
            <div>
              <p>{budget.start_date}</p>
              <p>{budget.end_date}</p>
              <p>{budget.income}</p>
            </div> 
          </Link>
        ))}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  budgets: state.budgets.all,
});

const mapDispatchToProps = dispatch => ({
  getBudgets: token => dispatch(getBudgets(token)),
});

UserBudgets.propTypes = {
  getBudgets: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBudgets);
