require 'pry'

class SessionsController < Devise::SessionsController

  def create
    @user = User.find_by_email(user_params[:email])
    return invalid_login_attempt unless @user

    if @user.valid_password?(user_params[:password])
      sign_in :user, @user
      render json: {
        logged_in: true,
        user: @user
      }
    else
      invalid_login_attempt
    end
  end

  def destroy
    sign_out(@user)
    render :json=> {:success=>true}
  end


    private

    def invalid_login_attempt
      warden.custom_failure!
      render json: {logged_in: false}, status: :unprocessable_entity
    end

    def user_params
       params.require(:user).permit(:email, :password)
    end

end










# class SessionsController < ApplicationController
#   include CurrentUserConcern

#     def create
#       binding.pry
#       user = User.find_by(:email => params[:user][:email])
#       session[:user_id] = user.id
#       if user.authenticate
#         render json: user
#       end
#     end

#     def logged_in
#       if @current_user
#         render json: {
#           logged_in: true,
#           user: @current_user
#         }
#       else
#         render json: {
#           logged_in: false
#         }
#       end
#     end
# end