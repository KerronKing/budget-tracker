class BudgetTotalSerializer < ActiveModel::Serializer
  attributes :id, :income, :rent, :transport, :food, :entertainment,
             :utilities, :other
  belongs_to :budget
end
