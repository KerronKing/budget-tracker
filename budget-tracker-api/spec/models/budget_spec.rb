require 'rails_helper'

RSpec.describe Budget, type: :model do
  let(:user) do
    User.new(name: 'Curtis',
             email: 'curtis@example.com',
             password: '123456',
             password_confirmation: '123456')
  end
  let(:budget) do
    user.budgets.build(name: 'March budget',
                                    start_date: '03-01-2020',
                                    end_date: '31-01-2020',
                                    income: 7000)
  end

  it 'should not be blank' do
    expect(budget).to be_valid
  end

  it 'should have a name' do
    budget = Budget.new(name: ' ', start_date: '03-01-2020', end_date: '31-01-2020', income: 7000)
    expect(budget).to_not be_valid
  end

  it 'should have a start date' do
    budget = Budget.new(name: 'March budget', start_date: ' ', end_date: '31-01-2020', income: 7000)
    expect(budget).to_not be_valid
  end

  it 'should have a end date' do
    budget = Budget.new(name: 'March budget', start_date: '03-01-2020', end_date: ' ', income: 7000)
    expect(budget).to_not be_valid
  end

  it 'should have an income value' do
    budget = Budget.new(name: 'March budget', start_date: '03-01-2020', end_date: '31-01-2020', income: ' ')
    expect(budget).to_not be_valid
  end

  it 'should have many budget totals' do
    budget = Budget.reflect_on_association(:budget_totals)
    expect(budget.macro).to eq(:has_many)
  end
end
