class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :budgets
end
