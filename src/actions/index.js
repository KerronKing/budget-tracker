const LOGGED_IN = 'LOGGED_IN';
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const GET_BUDGETS = 'GET_BUDGETS';
const GET_BUDGET = 'GET_BUDGET';
const GET_TOTALS = 'GET_TOTALS';

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

const getBudget = budget => ({
  type: GET_BUDGET,
  budget,
});

const getTotals = totals => ({
  type: GET_TOTALS,
  totals,
});

export {
  loggedIn, LOGGED_IN,
  getUser, GET_USER,
  removeUser, REMOVE_USER,
  getBudgets, GET_BUDGETS,
  getBudget, GET_BUDGET,
  getTotals, GET_TOTALS,
};
