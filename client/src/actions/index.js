const LOGGED_IN = 'LOGGED_IN';
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const GET_BUDGETS = 'GET_BUDGETS';

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

export {
  loggedIn, LOGGED_IN,
  getUser, GET_USER,
  removeUser, REMOVE_USER,
  getBudgets, GET_BUDGETS,
};
