import { GET_USER } from '../actions/index';

const initialState = {
  name: '',
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        name: action.name,
        email: action.email,
      }
    default:
      return state;
  }
};

export default userReducer;
