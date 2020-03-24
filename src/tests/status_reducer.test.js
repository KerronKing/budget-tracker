import statusReducer from '../reducers/status_reducer';
import * as types from '../actions/index';

describe('status reducer', () => {
  it('should return the initial state', () => {
    expect(statusReducer(undefined, {})).toEqual({
      status: false,
    });
  });

  it('should handle LOGGED_IN', () => {
    expect(
      statusReducer({}, {
        type: types.LOGGED_IN,
        status: true,
      }),
    ).toEqual({
      status: true,
    });
  });
});
