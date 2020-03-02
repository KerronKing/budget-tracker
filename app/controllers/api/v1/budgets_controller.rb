class Api::V1::BudgetsController < ApplicationController
  before_action :set_budget, only: %i[destroy]

  def index
    @budgets = Budget.all
    render json: @budgets
  end

  def create
    @budget = Budget.new(budget_params)
    if @budget.save
      render json: @budget, status: 200
    else
      render json: { errors: @budget.errors.full_messages }, status: 422
    end
  end

  def destroy
    @budget.destroy
  end

  private

  def set_budget
    @budget = Budget.find(params[:id])
  end

  def budget_params
    params.require(budget).permit(:start_date, :end_date, :income)
  end
end
