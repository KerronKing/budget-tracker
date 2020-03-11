require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do
    User.new(name: 'Curtis',
             email: 'curtis@example.com',
             password: '123456',
             password_confirmation: '123456')
  end

  it 'should have a name present' do
    expect(user).to be_valid
  end

  it 'should have a name present' do
    user = User.new(name: '  ')
    expect(user).to_not be_valid
  end

  it 'should have a email present' do
    user = User.new(email: '  ')
    expect(user).to_not be_valid
  end

  it 'should have many posts' do
    user = User.reflect_on_association(:budgets)
    expect(user.macro).to eq(:has_many)
  end
end
