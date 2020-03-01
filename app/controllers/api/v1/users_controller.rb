module Api
  module V1
    class UsersController < ApplicationController
      def index
        @budgets = @user.budgets
        render json: @budgets
      end

      def show
        @user = User.find(params[:id])
        render json: @user
      end
    end
  end
end
