Rails.application.routes.draw do

resources :users, only: [:create, :index]
post "/login", to: "auth#login"
post "/signup", to: "users#create"
get "/profile", to: "users#profile"

end
