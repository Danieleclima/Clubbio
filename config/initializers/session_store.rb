
if Rails.env === "production" || "development"
Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "http://localhost:3001"
else
    Rails.application.config.session_store :cookie_store, key: "_authentication_app"
end
