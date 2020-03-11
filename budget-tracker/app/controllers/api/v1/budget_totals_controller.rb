class Api::V1::BudgetTotalsController < ApplicationController
  def index
    @budget = Budget.find(params[:budget_id])
    @budget_totals = @budget.budget_totals.all
    render json: @budget_totals
  end

  def new
    @budget = Budget.find(params[:budget_id])
    @budget_total = @budget.budget_totals.build
    render json: @budget_total
  end

  def show
    @budget = Budget.find(params[:budget_id])
    @budget_total = @budget.budget_totals.find_by(id: params[:id])
    render json: @budget_total
  end

  def create
    @budget = Budget.find(params[:budget_id])
    @budget_total = @budget.budget_totals.build(budget_total_params)
    render json: @budget_total, adapter: :attributes, status: 201 if @budget_total.save
  end

  def update
    @budget_total = @budget.budget_totals.find_by(id: params[:id]) if @budget
    if @budget_total.update(budget_total_params)
      render json: @budget_total, status: 200
    else
      render json: { errors: @budget_total.errors.full_messages }, status: 422
    end
  end

  def destroy
    @budget = Budget.find(params[:budget_id])
    @budget_total = @budget.budget_totals.find_by(id: params[:id]) if @budget
    @budget_total.destroy
  end

  private

  def budget_total_params
    params.require(:budget_total).permit(:date, :rent, :transport, :food,
                                         :entertainment, :utilities, :other)
  end
end
