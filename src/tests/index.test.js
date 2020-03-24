import * as actions from '../actions/index';

describe('actions', () => {
  it('should create an action to update user status', () => {
    const status = true;
    const expectedAction = {
      type: actions.LOGGED_IN,
      status,
    };
    expect(actions.loggedIn(status)).toEqual(expectedAction);
  });

  it('should create an action to update user info', () => {
    const name = 'Test User';
    const email = 'testuser@example.com';

    const expectedAction = {
      type: actions.GET_USER,
      name,
      email,
    };
    expect(actions.getUser(name, email)).toEqual(expectedAction);
  });

  it('should create an action to remove user info', () => {
    const expectedAction = {
      type: actions.REMOVE_USER,
    };
    expect(actions.removeUser()).toEqual(expectedAction);
  });

  it('should create an action to update the user\'s budgets', () => {
    const budgets = [{
      name: 'April Budget',
      startdate: '2020-01-01',
      enddate: '2020-01-31',
      income: 2500,
    }];

    const expectedAction = {
      type: actions.GET_BUDGETS,
      budgets,
    };
    expect(actions.getBudgets(budgets)).toEqual(expectedAction);
  });

  it('should create an action to update the current budget', () => {
    const budget = {
      name: 'April Budget',
      startdate: '2020-01-01',
      enddate: '2020-01-31',
      income: 2500,
    };
    const expectedAction = {
      type: actions.GET_BUDGET,
      budget,
    };
    expect(actions.getBudget(budget)).toEqual(expectedAction);
  });

  it('should create an action to update the current budget\'s totals', () => {
    const totals = {
      date: '2020-01-01',
      rent: 500,
      transport: 100,
      food: 80,
      entertainment: 50,
      utilities: 45,
      other: 20,
    };

    const expectedAction = {
      type: actions.GET_TOTALS,
      totals,
    };
    expect(actions.getTotals(totals)).toEqual(expectedAction);
  });
});
