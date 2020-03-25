require 'pry'

class UsersController < ApplicationController

include CurrentUserConcern

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

    # def show
    #     binding.pry
    #     if @current_user
    #         render json: {
    #             user: @current_user
    #           }
    #         else
    #           render json: {
    #             logged_in: false
    #           }
    #         end
    # end

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
