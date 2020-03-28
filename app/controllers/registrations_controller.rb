require 'pry'

class RegistrationsController < Devise::RegistrationsController

# register a new user
    def create
    binding.pry
      @user = User.create(user_params)
      if @user
        render json: @user
        binding.pry
      else
# devise custom error
    binding.pry
        warden.custom_failure!
        render json: { error: 'signup error' }, status: :unprocessable_entity
      end
    end

# update user details
    def update
      @user = User.find_by_email(user_params[:email])
  
      if @user.update_attributes(user_params)
        render json: @user
      else
        warden.custom_failure!
        render :json=> @user.errors, :status=>422
      end
   end

# remove a user
    def destroy
      @user = User.find_by_email(user_params[:email])
      if @user.destroy
        render :json=> { success: 'user was successfully deleted' }, :status=>201
      else
        render :json=> { error: 'user could not be deleted' }, :status=>422
      end
    end
  
    private
  
    def user_params
       params.require(:user).permit(:email, :password, :password_confirmation)
    end
  end