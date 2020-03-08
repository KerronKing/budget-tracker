require 'factory_bot'

FactoryBot.define do
  factory :user do
    name { Faker::Name.first_name }
    email { Faker::Internet.email }
    password_digest { '123456' }
  end
  trait :with_budget do
    after(:create) do |user|
      create(:budget, user_id: user.id)
    end
  end
end
