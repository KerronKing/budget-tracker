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
    const { name, budgets } = this.props;
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    return (
      <div>
        <div className="header">
          <h2>Budget Tracker</h2>
        </div>
        <h3 className="budget-page-title">
          {name}
          &apos;s Budgets
        </h3>
        <div className="user-budgets">
          {budgets.map(budget => (
            <div key={budget.id} className="budget-details">
              <div className="budget-name">
                <Link to={`/budgets/${budget.id}`}>
                  <p className="b-content">{budget.name}</p>
                </Link>
                <button
                  type="submit"
                  onClick={() => axios({
                    method: 'delete',
                    url: `http://localhost:3001/api/v1/budgets/${budget.id}`,
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
  budgets: state.budgets.all,
  name: state.users.name,
  email: state.users.email,
});

const mapDispatchToProps = dispatch => ({
  getBudgets: budgets => dispatch(getBudgets(budgets)),
});

UserBudgets.propTypes = {
  getBudgets: PropTypes.func.isRequired,
  budgets: PropTypes.arrayOf(
    PropTypes.shape({
      income: PropTypes.number.isRequired,
    }),
  ),
  name: PropTypes.string.isRequired,
};

UserBudgets.defaultProps = {
  budgets: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBudgets);
