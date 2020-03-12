import { LOGGED_IN } from '../actions/index';

const initialState = {
  status: false,
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default statusReducer;
