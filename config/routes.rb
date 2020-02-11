Rails.application.routes.draw do
  resources :reviews
  resources :users
  resources :nightclubs
  post '/sessions' => "sessions#create"
  get '/logged_in' => "sessions#logged_in"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
