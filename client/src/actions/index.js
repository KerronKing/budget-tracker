import axios from 'axios';

const LOGGED_IN = 'LOGGED_IN';
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const GET_BUDGETS = 'GET_BUDGETS';
const CREATE_TOTAL = 'CREATE_TOTAL';

const API_URL = 'http://localhost:3001/api/v1';

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

const createTotal = (total, budgetId) => {
  const request = axios.post(`${API_URL}/budgets/${budgetId}/budget_totals`, total);
  return {
    type: CREATE_TOTAL,
    payload: request,
  };
};

export {
  loggedIn, LOGGED_IN,
  getUser, GET_USER,
  removeUser, REMOVE_USER,
  getBudgets, GET_BUDGETS,
  createTotal, CREATE_TOTAL,
};
