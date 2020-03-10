class Budget < ApplicationRecord
  has_many :budget_totals
  belongs_to :user
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :income, presence: true
end
