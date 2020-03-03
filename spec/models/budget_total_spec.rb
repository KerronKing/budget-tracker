require 'rails_helper'

RSpec.describe BudgetTotal, type: :model do
  let(:user) { User.create(name: 'Curtis', email: 'curtis@example.com') }
  let(:budget) { user.budgets.build(start_date: '2020-03-01', end_date: '2020-03-31', income: 7000) }
  let(:budget_total) do
    budget.budget_totals.build(date: '2020-03-01',
                               rent: 500, transport: 200,
                               food: 400, entertainment: 50,
                               utilities: 150, other: 10)
  end

  it 'should not be blank' do
    expect(budget_total).to be_valid
  end

  it 'should have a date' do
    budget = BudgetTotal.new(date: '',
                             rent: 500, transport: 200,
                             food: 400, entertainment: 50,
                             utilities: 150, other: 10)
    expect(budget).to_not be_valid
  end

  it 'should have one budget' do
    budget_total = BudgetTotal.reflect_on_association(:budget)
    expect(budget_total.macro).to eq(:belongs_to)
  end
end
