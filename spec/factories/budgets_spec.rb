require 'factory_bot'

FactoryBot.define do
  factory :budget do
    start_date { Faker::Date.between(from: Date.today, to: 1.year.from_now) }
    end_date { Faker::Date.between(from: 1.month.from_now, to: 1.year.from_now) }
    income { Faker::Number.within(range: 2000..10000) }
  end
end