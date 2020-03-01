class CreateBudgets < ActiveRecord::Migration[6.0]
  def change
    create_table :budgets do |t|
      t.integer :user_id
      t.date :start_time
      t.date :end_time

      t.timestamps
    end
  end
end
