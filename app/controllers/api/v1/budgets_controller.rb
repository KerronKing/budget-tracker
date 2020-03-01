module Api
  module V1
    class BudgetsController < ApplicationController
      def new
        @budget = current_user.budget.build
        render json: @budget
      end

      def create
        @budget = current_user.budget.build(budget_params)
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

      def budget_params
        params.require(budget).permit(:start_date, :end_date)
      end
    end
  end
end
