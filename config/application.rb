require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Clubbio
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3001'
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: true
      end

      allow do
        origins 'http://localhost:3000'
        resource '*', :headers => :any, methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: true
      end
    end
  
    config.session_store :cookie_store, key: '_interslice_session' # <-- this also configures session_options for use below
    config.middleware.use ActionDispatch::Cookies # Required for all session management (regardless of session_store)
    config.middleware.use config.session_store, config.session_options
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
  end
end
