import { combineReducers } from 'redux';
import budgetReducer from './budget_reducer';
import totalReducer from './total_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  budgets: budgetReducer,
  total: totalReducer,
  users: userReducer,
});

export default rootReducer;
