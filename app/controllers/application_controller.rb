class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :configure_permitted_parameters, if: :devise_controller?
    protect_from_forgery with: :exception, prepend: true

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:user => [:email, :password, :password_confirmation]])
      end
end
