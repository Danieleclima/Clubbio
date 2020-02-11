# require 'pry'

class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user= User.create(user_params)
        if user
        session[:user_id] = user.id
        end
        binding.pry
        render json: user
    end

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
