import GET_BUDGETS from '../actions/index';
import GET_BUDGET from '../actions/index';

const initialState = {
  all: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
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
