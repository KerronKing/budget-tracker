class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, adapter: :attributes, status: 201
    end
  end

  def show
    @user = User.find(params[:id])
    @budgets = @user.budgets
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end

