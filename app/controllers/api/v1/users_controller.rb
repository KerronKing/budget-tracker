class Api::V1::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
  end

  def show
    @user = User.find(params[:id])
    @budgets = @user.budgets
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
