import axios from 'axios';

const USER_SIGNUP = 'USER_SIGNUP';
const LOGGED_IN = 'LOGGED_IN';
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const GET_BUDGETS = 'GET_BUDGETS';
const CREATE_BUDGET = 'CREATE_BUDGET';
const CREATE_TOTAL = 'CREATE_TOTAL';

const API_URL = 'http://localhost:3001/api/v1';

const userSignup = user => {
  const request = axios.post(`${API_URL}/users`, user);
  return {
    type: USER_SIGNUP,
    payload: request,
  };
};

const loggedIn = status => ({
  type: LOGGED_IN,
  status,
});

const getUser = (name, email) => ({
  type: GET_USER,
  name,
  email,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const getBudgets = budgets => ({
  type: GET_BUDGETS,
  budgets,
});

const createBudget = budget => {
  const request = axios.post(`${API_URL}/budgets`, budget);
  return {
    type: CREATE_BUDGET,
    payload: request,
  };
};

const createTotal = (total, budgetId) => {
  const request = axios.post(`${API_URL}/budgets/${budgetId}/budget_totals`, total);
  return {
    type: CREATE_TOTAL,
    payload: request,
  };
};

export {
  userSignup, USER_SIGNUP,
  loggedIn, LOGGED_IN,
  getUser, GET_USER,
  removeUser, REMOVE_USER,
  getBudgets, GET_BUDGETS,
  createBudget, CREATE_BUDGET,
  createTotal, CREATE_TOTAL,
};
