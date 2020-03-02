class CreateBudgetTotals < ActiveRecord::Migration[6.0]
  def change
    create_table :budget_totals do |t|
      t.references :budget, null: false, foreign_key: true
      t.date :date
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
