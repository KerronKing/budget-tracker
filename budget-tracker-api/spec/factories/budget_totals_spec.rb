require 'factory_bot'

FactoryBot.define do
  factory :budget_total do
    date { Faker::Date.between(from: Date.today, to: 1.year.from_now) }
    rent { Faker::Number.within(range: 100..1000) }
    transport { Faker::Number.within(range: 100..500) }
    food { Faker::Number.within(range: 300..600) }
    entertainment { Faker::Number.within(range: 0..1000) }
    utilities { Faker::Number.within(range: 100..500) }
    other { Faker::Number.within(range: 0..200) }
  end
end
