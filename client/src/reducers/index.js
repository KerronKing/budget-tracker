import { combineReducers } from 'redux';
import budgetReducer from './budget_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  budgets: budgetReducer,
  users: userReducer,
});

export default rootReducer;
