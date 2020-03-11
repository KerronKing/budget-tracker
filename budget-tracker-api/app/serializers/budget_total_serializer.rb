class BudgetTotalSerializer < ActiveModel::Serializer
  attributes :id, :date, :rent, :transport, :food, :entertainment,
             :utilities, :other
  belongs_to :budget
end
