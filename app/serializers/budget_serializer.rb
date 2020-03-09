class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :income
  has_many :budget_totals
end
