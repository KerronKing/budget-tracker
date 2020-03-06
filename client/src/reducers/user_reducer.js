import GET_USER from '../actions/index';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload.data,
      }
    default:
      return state;
  }
};

export default userReducer;
