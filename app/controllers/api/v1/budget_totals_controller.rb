module Api
  module V1
    class BudgetTotalsController < ApplicationController
      def new
        @budget_total = @budget.budget_total.build
        render json: @budget_total
      end

      def create
        @budget_total = @budget.budget_total.build(budget_total_params)
        if @budget_total.save
          render json: @budget_total, status: 200
        else
          render json: { errors: @budget_total.errors.full_messages }, status: 422
        end
      end

      def update
        if @budget.update
          render json: @budget_total, status: 200
        else
          render json: { errors: @budget_total.errors.full_messages }, status: 422
        end
      end

      def destroy
        @budget_total.destroy
      end

      private

      def budget_total_params
        params.require(budget_total).permit(:income, :rent, :transport, :food,
                                            :entertainment, :utilities, :other)
      end
    end
  end
end
