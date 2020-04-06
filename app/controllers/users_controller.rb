require 'pry'

class UsersController < ApplicationController

    def index
        # binding.pry
        users = User.all
        render json: users
    end

    def create
        binding.pry
        user= User.create(user_params)
        if user
        session[:user_id] = user.id
        end
        render json: user
    end

    def logged_in
        # binding.pry
        if current_user
            render json: current_user
        end
    end

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
