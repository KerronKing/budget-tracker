# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do
  User.create(
    name: Faker::Name.first_name,
    email: Faker::Internet.email,
    password: '123456'
  )
end

5.times do
  Budget.create(
    name: "#{Faker::Lorem.words(number: 1)} budget",
    start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
    end_date: Faker::Date.between(from: 1.month.from_now, to: 1.year.from_now),
    income: Faker::Number.within(range: 2000..10000),
    user_id: 1
  )
end

5.times do
  BudgetTotal.create(
    date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
    rent: Faker::Number.within(range: 100..1000),
    transport: Faker::Number.within(range: 100..500),
    food: Faker::Number.within(range: 300..600),
    entertainment: Faker::Number.within(range: 0..1000),
    utilities: Faker::Number.within(range: 100..500),
    other: Faker::Number.within(range: 0..200),
    budget_id: 1
  )
end