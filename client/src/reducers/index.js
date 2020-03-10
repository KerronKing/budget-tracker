import { combineReducers } from 'redux';
import budgetReducer from './budget_reducer';
import userReducer from './user_reducer';
import statusReducer from './status_reducer';
import totalReducer from './total_reducer';

const rootReducer = combineReducers({
  budgets: budgetReducer,
  users: userReducer,
  status: statusReducer,
  totals: totalReducer,
});

export default rootReducer;
