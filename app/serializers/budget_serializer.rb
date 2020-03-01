class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date
  belongs_to :user
  has_one :budget_total
end
