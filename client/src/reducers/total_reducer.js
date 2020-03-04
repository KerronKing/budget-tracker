import CREATE_TOTAL from '../actions/index';
import GET_TOTALS from '../actions/index';

const initialState = {
  all: [],
  budget_total: null,
};

const totalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TOTAL:
      return {
        ...state,
        all: action.payload.data,
      }
    case GET_TOTALS:
      return {
        ...state,
        all: action.payload.data,
      }
    default:
      return state;
  }
};

export default totalsReducer;
