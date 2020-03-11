class AddColumnToBudgets < ActiveRecord::Migration[6.0]
  def change
    add_reference :budgets, :user, foreign_key: true
  end
end
