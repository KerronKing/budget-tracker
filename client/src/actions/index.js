import axios from 'axios';

const USER_SIGNUP = 'USER_SIGNUP';
const GET_USER = 'GET_USER';
const CREATE_BUDGET = 'CREATE_BUDGET';
const CREATE_TOTAL = 'CREATE_TOTAL';

const API_URL = 'http://localhost:3001/api/v1';

const userSignup = user => {
  const request = axios.post(`${API_URL}/users`, user);
  return {
    type: USER_SIGNUP,
    payload: request,
  }
};

const getUser = (user, email) => {
  return {
    type: GET_USER,
    user,
    email,
  }
};

const createBudget = budget => {
  const request = axios.post(`${API_URL}/budgets`, budget);
  return {
    type: CREATE_BUDGET,
    payload: request,
  }
};

const createTotal = (total, budget_id) => {
  const request = axios.post(`${API_URL}/budgets/${budget_id}/budget_totals`, total);
  return {
    type: CREATE_TOTAL,
    payload: request,
  }
};

export {
  userSignup, USER_SIGNUP,
  getUser, GET_USER,
  createBudget, CREATE_BUDGET,
  createTotal, CREATE_TOTAL,
}

