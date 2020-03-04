class Api::V1::BudgetsController < ApplicationController

  def index
    @budgets = Budget.all
    render json: @budgets
  end

  def show
    @budget = Budget.find(params[:id])
    render json: @budget
  end

  def create
    @user = User.find(params[:user_id])
    log_in @user
    @budget = current_user.budgets.build(budget_params)
    if @budget.save
      render json: @budget, status: 201
    else
      render json: { errors: @budget.errors.full_messages }, status: 422
    end
  end

  def destroy
    @budget = Budget.find(params[:id])
    @budget.destroy
  end

  private

  def budget_params
    params.require(:budget).permit(:start_date, :end_date, :income)
  end
end
