class CreateBudgetTotals < ActiveRecord::Migration[6.0]
  def change
    create_table :budget_totals do |t|
      t.integer :budget_id
      t.integer :income
      t.integer :rent
      t.integer :transport
      t.integer :food
      t.integer :entertainment
      t.integer :utilities
      t.integer :other

      t.timestamps
    end
  end
end
