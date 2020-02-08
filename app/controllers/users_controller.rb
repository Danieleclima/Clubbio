# require 'pry'

class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        binding.pry
        user= User.create(user_params)
        render json: user
    end

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
