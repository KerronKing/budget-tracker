class SessionsController < ApplicationController

  def create
    user = User.find_by(email: session_params[:email])
    if user
      log_in user
      render json: {
        logged_in: true,
        user
      }
    else
      render json: {
        status: 401,
        error: 'Please try again'
      }
    end
  end

  def destroy
    log_out if logged_in?
  end
  
  private

  def session_params
    params.require(:user).permit(:name, :email)
  end
end
