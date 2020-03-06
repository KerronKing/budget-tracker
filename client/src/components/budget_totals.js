import React from 'react';
import { PropTypes } from 'prop-types';

class BudgetTotals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: {},
      budget_totals: [],
    }
  }
  
  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    let id = this.props.params;
    axios({method: 'get', url: `http://localhost:3001/api/v1/budgets/${id}`, headers: {'Authorization': token }})
      .then(response => {
        this.setState({ budget: response.data });
      })
    axios({method: 'get', url: `http://localhost:3001/api/v1/budgets${id}/budget_totals`, headers: {'Authorization': token }})
      .then(response => {
        this.setState({ budget_totals: response.data });
      })
  }

  render() {
    const { budget } = this.props;
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

BudgetTotals.propTypes = {
  getBudget: PropTypes.func.isRequired,
}

export default BudgetTotals;
