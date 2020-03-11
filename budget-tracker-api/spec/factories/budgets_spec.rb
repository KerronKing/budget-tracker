require 'factory_bot'

FactoryBot.define do
  factory :budget do
    name { "#{Faker::Lorem.words(number: 4)} budget" }
    start_date { Faker::Date.between(from: Date.today, to: 1.year.from_now) }
    end_date { Faker::Date.between(from: 1.month.from_now, to: 1.year.from_now) }
    income { Faker::Number.within(range: 2_000..10_000) }
    association :user, factory: :user
  end
end
