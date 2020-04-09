require "pry"

class OmniauthCallbacksController < Devise::OmniauthCallbacksController

    def facebook
        @user = User.create_from_provider_data(request.env["omniauth.auth"])
    
        if @user.persisted?
          sign_in @user #this will throw if @user is not activated
          redirect_to "http://localhost:3000/"
          # set_flash_message(:notice, :success, kind: "Facebook") if is_navigational_format?
        else
          session["devise.facebook_data"] = request.env["omniauth.auth"]
          redirect_to new_user_registration_url
        end
      end

      def google_oauth2
        @user = User.create_from_provider_data(request.env["omniauth.auth"])
    binding.pry
        if @user.persisted?
          sign_in @user #this will throw if @user is not activated
          redirect_to "http://localhost:3000/"
          # set_flash_message(:notice, :success, kind: "Facebook") if is_navigational_format?
        else
          session["devise.facebook_data"] = request.env["omniauth.auth"]
          redirect_to new_user_registration_url
        end
      end
    
      def failure
        redirect_to "http://localhost:3000/"
      end

end