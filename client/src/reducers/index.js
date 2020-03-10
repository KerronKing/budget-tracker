import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
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

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;
