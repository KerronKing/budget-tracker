require 'rails_helper'

RSpec.describe Budget, type: :model do
  let(:budget) { Budget.create(start_date: '2020-03-01', end_date: '2020-03-31', income: 7000) }

  it 'should not be blank' do
    expect(budget).to be_valid
  end

  it 'should have a start date' do
    budget = Budget.new(start_date: '   ', end_date: '2020-03-31', income: 7000)
    expect(budget).to_not be_valid
  end

  it 'should have a end date' do
    budget = Budget.new(start_date: '2020-03-01', end_date: '   ', income: 7000)
    expect(budget).to_not be_valid
  end

  it 'should have an income value' do
    budget = Budget.new(start_date: '2020-03-1', end_date: '2020-03-31', income: '')
    expect(budget).to_not be_valid
  end

  it 'should have many budget totals' do
    budget = Budget.reflect_on_association(:budget_totals)
    expect(budget.macro).to eq(:has_many)
  end
end
