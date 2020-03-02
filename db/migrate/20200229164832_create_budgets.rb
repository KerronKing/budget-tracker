class CreateBudgets < ActiveRecord::Migration[6.0]
  def change
    create_table :budgets do |t|
      t.date :start_time
      t.date :end_time
      t.integer :income

      t.timestamps
    end
  end
end
