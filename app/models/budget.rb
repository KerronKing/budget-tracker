class Budget < ApplicationRecord
  has_many :budget_totals
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :income, presence: true
end
