import axios from 'axios';

const USER_SIGNUP = 'USER_SIGNUP';
const CREATE_BUDGET = 'CREATE_BUDGET';
const CREATE_TOTAL = 'CREATE_TOTAL';
const GET_BUDGETS = 'GET_BUDGETS';

const API_URL = 'http://localhost:3001/api/v1';

const userSignup = user => {
  const request = axios.post(`${API_URL}/users`, user)
  return {
    type: USER_SIGNUP,
    payload: request,
  }
};

const createBudget = budget => {
  const request = axios.post(`${API_URL}/budgets`, budget)
  return {
    type: CREATE_BUDGET,
    payload: request
  }
};

const createTotal = (total, budget_id) => {
  const request = axios.post(`${API_URL}/budgets/${budget_id}/budget_totals`, total)
  return {
    type: CREATE_TOTAL,
    payload: request
  }
};

const getBudgets = token => {
  const request = axios.get({ method: `${API_URL}/budgets`, headers: { 'Authorization': token } })
  return {
    type: GET_BUDGETS,
    payload: request
  }
};

export default {
  userSignup, USER_SIGNUP,
  createBudget, CREATE_BUDGET,
  createTotal, CREATE_TOTAL,
  getBudgets, GET_BUDGETS,
}

