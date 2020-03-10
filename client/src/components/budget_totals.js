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
    axios({ method: 'get', url: `http://localhost:3001/api/v1/budgets/${budgetId}/budget_totals`, headers: { Authorization: token } })
      .then(response => {
        getTotals(response.data);
      })  
 }
 
 render() {
   const { budgetTotals } = this.props;
   return (
     <div>
       <h1>Budgets Data</h1>
       { budgetTotals.map(budgetTotal => (
         <div key={budgetTotal.id}>
           <p>{budgetTotal.date}</p>
           <p>{budgetTotal.rent}</p>
           <p>{budgetTotal.transport}</p>
           <p>{budgetTotal.food}</p>
           <p>{budgetTotal.entertainment}</p>
           <p>{budgetTotal.utilities}</p>
           <p>{budgetTotal.other}</p>
         </div>
         ))}
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
 
