import USER_SIGNUP from '../actions/index';
import USER_LOGIN from '../actions/index';
import USER_LOGOUT from '../actions/index';

const initialState = {
  user: {},
  status: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        
      }
    case USER_LOGIN:
      return {
        
      }
    case USER_LOGOUT:
      return {
        
      }
    default:
      return state;
  }
};

export default userReducer;