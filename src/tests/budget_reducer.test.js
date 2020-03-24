import budgetReducer from '../reducers/budget_reducer';
import * as types from '../actions/index';

describe('budget reducer', () => {
  it('should return the initial state', () => {
    expect(budgetReducer(undefined, {})).toEqual({
      all: [],
      budget: null,
    });
  });

  it('should handle GET_BUDGET', () => {
    expect(
      budgetReducer({}, {
        type: types.GET_BUDGET,
        budget: {
          name: 'April Budget',
          startdate: '2020-01-01',
          enddate: '2020-01-31',
          income: 2500,
        },
      }),
    ).toEqual({
      budget: {
        name: 'April Budget',
        startdate: '2020-01-01',
        enddate: '2020-01-31',
        income: 2500,
      },
    });
  });
});
