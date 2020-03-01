class Budget < ApplicationRecord
  belongs_to :user
  has_one :budget_total
end
