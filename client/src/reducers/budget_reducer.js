import { GET_BUDGETS } from '../actions/index';

const initialState = {
  all: [],
  budget: null,
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUDGETS:
      return {
        ...state,
        all: action.budgets,
      };
    case GET_BUDGET:
      return {
        ...state,
        budget: action.budget,
      };
    default:
      return state;
  }
};

export default budgetReducer;
