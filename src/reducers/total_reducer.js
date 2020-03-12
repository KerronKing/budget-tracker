import { GET_TOTALS } from '../actions/index';

const initialState = {
  all: [],
};

const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTALS:
      return {
        ...state,
        all: action.totals,
      };
    default:
      return state;
  }
};

export default totalReducer;
