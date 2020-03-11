# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_03_133906) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budget_totals", force: :cascade do |t|
    t.bigint "budget_id", null: false
    t.date "date"
    t.integer "rent"
    t.integer "transport"
    t.integer "food"
    t.integer "entertainment"
    t.integer "utilities"
    t.integer "other"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["budget_id"], name: "index_budget_totals_on_budget_id"
  end

  create_table "budgets", force: :cascade do |t|
    t.string "name"
    t.date "start_date"
    t.date "end_date"
    t.integer "income"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_budgets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "budget_totals", "budgets"
  add_foreign_key "budgets", "users"
end
