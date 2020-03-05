import axios from 'axios';

const USER_SIGNUP = 'USER_SIGNUP';
const CREATE_BUDGET = 'CREATE_BUDGET';
const CREATE_TOTAL = 'CREATE_TOTAL';
const GET_BUDGETS = 'GET_BUDGETS';
const GET_TOTALS = 'GET_TOTALS';

const API_URL = 'http://localhost:3001/api/v1';

const userSignup = user => {
  const request = axios.post(`${API_URL}/users`, user)
  return {
    type: USER_SIGNUP,
    payload: request,
  }
};

const createBudget = props => {
  const request = axios.post(`${API_URL}/users/:user_id/budgets`, props)
  return {
    type: CREATE_BUDGET,
    payload: request
  }
};

const createTotal = props => {
  const request = axios.post(`${API_URL}/budgets/:budget_id/budget_totals`, props)
  return {
    type: CREATE_TOTAL,
    payload: request
  }
};

const getBudgets = () => {
  const request = axios.get(`${API_URL}/users/:user_id/budgets`)
  return {
    type: GET_BUDGETS,
    payload: request
  }
};

const getTotals = () => {
  const request = axios.get(`${API_URL}/budgets/:budget_id/budget_totals`)
  return {
    type: GET_TOTALS,
    payload: request
  }
};

export default {
  userSignup, USER_SIGNUP,
  createBudget, CREATE_BUDGET,
  createTotal, CREATE_TOTAL,
  getBudgets, GET_BUDGETS,
  getTotals, GET_TOTALS,
}

