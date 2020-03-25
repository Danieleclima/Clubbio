require 'pry'

class SessionsController < ApplicationController
  include CurrentUserConcern

    def create
      binding.pry
      user = User.find_by(:email => params[:user][:email])
      session[:user_id] = user.id
      if user.authenticate
        render json: user
      end
    end

    def logged_in
      if @current_user
        render json: {
          logged_in: true,
          user: @current_user
        }
      else
        render json: {
          logged_in: false
        }
      end
    end
end
