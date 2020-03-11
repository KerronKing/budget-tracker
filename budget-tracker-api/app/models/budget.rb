class Budget < ApplicationRecord
  has_many :budget_totals, dependent: :destroy
  belongs_to :user
  validates :name, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :income, presence: true
end
