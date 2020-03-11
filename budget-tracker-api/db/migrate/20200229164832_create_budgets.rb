class CreateBudgets < ActiveRecord::Migration[6.0]
  def change
    create_table :budgets do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.integer :income

      t.timestamps
    end
  end
end
