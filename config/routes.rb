Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  resources :reviews
  # resources :users
  resources :nightclubs
  # post '/sessions' => "sessions#create"
  # get '/logged_in' => "sessions#logged_in"
  # devise_for :users, controllers: { registrations: "users/registrations" }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
