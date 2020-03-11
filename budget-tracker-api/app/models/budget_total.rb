class BudgetTotal < ApplicationRecord
  belongs_to :budget
  validates :date, presence: true
end
