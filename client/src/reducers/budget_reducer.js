import { GET_BUDGETS, GET_BUDGET } from '../actions/index';

const initialState = {
  all: [],
  budget: null,
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUDGETS:
      return {
        ...state,
        all: action.payload.data,
      }
    case GET_BUDGET:
      return {
        ...state,
        budget: action.payload.data,
      }
    default:
      return state;
  }
};

export default budgetReducer;
