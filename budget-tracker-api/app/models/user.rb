class User < ApplicationRecord
  has_secure_password
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  has_many :budgets, dependent: :destroy

  def to_token_payload
    {
      sub: id,
      name: name
    }
  end
end
