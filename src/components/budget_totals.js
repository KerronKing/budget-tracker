import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { getTotals } from '../actions/index';
import Dropper from './Input';

class BudgetTotals extends React.Component {
  constructor(props) {
    super(props);
    this.graphToggle = this.graphToggle.bind(this);
  }

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

  graphToggle(id) {
    const graph = document.getElementById(id)
    graph.classList.toggle('hidden');
  }

  initData(obj) {
    this.data = {
      labels: ['rent', 'transport', 'food', 'entertainment', 'utilities', 'other'],
      datasets: [
        {
          label: 'totals',
          data: [
            obj.rent,
            obj.transport,
            obj.food,
            obj.entertainment,
            obj.utilities,
            obj.other,
          ],
          backgroundColor: [
            'rgba(254, 249, 231, 1)',
            'rgba(254, 245, 231, 1)',
            'rgba(234, 250, 241, 1)',
            'rgba(136, 78, 160, 1)',
            'rgba(41, 128, 185, 1)',
            'rgba(118, 215, 196, 1)',
          ],
        },
      ],
    };

    return this.data;
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
            <div key={budgetTotal.date}>
              <div className="total-drop">
                <p>{new Date(budgetTotal.date).toDateString()}</p>
                <Dropper
                  graphToggle={this.graphToggle}
                  id={budgetTotal.id}
                />
                {/* <input
                  onClick={id =>
                  }
                  type="button"
                  value="+"
                /> */}
              </div>
              <div
                id={`${budgetTotal.id}`}
                key={budgetTotal.date}
              >
                <Bar
                  data={this.initData(budgetTotal)}
                  options={{
                    title: {
                      display: true,
                      text: budgetTotal.date,
                      fontSize: 25,
                    },
                    legend: {
                      display: true,
                      position: 'right',
                      labels: {
                        fontColor: '#000',
                      },
                    },
                  }}
                  key={budgetTotal.date}
                />
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
      date: PropTypes.string.isRequired,
      rent: PropTypes.number.isRequired,
      transport: PropTypes.number.isRequired,
      food: PropTypes.number.isRequired,
      entertainment: PropTypes.number.isRequired,
      utilities: PropTypes.number.isRequired,
      other: PropTypes.number.isRequired,
    }),
  ),
};

BudgetTotals.defaultProps = {
  budgetTotals: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetTotals);
