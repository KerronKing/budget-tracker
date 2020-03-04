import axios from 'axios';

const USER_SIGNUP = 'USER_SIGNUP';
const USER_LOGIN = 'USER_LOGIN';
const CREATE_BUDGET = 'CREATE_BUDGET';
const CREATE_TOTAL = 'CREATE_TOTAL';
const GET_BUDGETS = 'GET_BUDGETS';
const GET_TOTALS = 'GET_TOTALS';

const API_URL = 'http://localhost:3000/api/v1';

const userSignup = () => {
  const request = axios.post(`${API_URL}/users`)
  return {
    type: USER_SIGNUP,
    payload: request
  }
};

const userLogin = () => {
  const request = axios.post(`${API_URL}/sessions`)
  return {
    type: USER_LOGIN,
    payload: request
  }
};

const createBudget = () => {
  const request = axios.post(`${API_URL}/users/:user_id/budgets`)
  return {
    type: CREATE_BUDGET,
    payload: request
  }
};

const createTotal = () => {
  const request = axios.post(`${API_URL}/budgets/:budget_id/budget_totals`)
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
  userSignup, userLogin, createBudget, createTotal, getBudgets, getTotals,
}

