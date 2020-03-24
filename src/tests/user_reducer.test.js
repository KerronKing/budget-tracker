import userReducer from '../reducers/user_reducer';
import * as types from '../actions/index';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      name: '',
      email: '',
    });
  });

  it('should handle GET_USER', () => {
    expect(
      userReducer({}, {
        type: types.GET_USER,
        name: 'Test User',
        email: 'testuser@example.com',
      }),
    ).toEqual({
      name: 'Test User',
      email: 'testuser@example.com',
    });
  });
});
