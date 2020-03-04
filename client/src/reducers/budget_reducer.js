import { CREATE_BUDGET, GET_BUDGETS } from '../actions/index';

const initialState = {
  all: [],
  budget: null,
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BUDGET:
      return {
        ...state,
        all: action.payload.data,
      }
    case GET_BUDGETS:
      return {
        ...state,
        all: action.payload.data,
      }
    default:
      return state;
  }
};

export default budgetReducer;
