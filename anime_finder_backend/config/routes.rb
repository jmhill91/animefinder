Rails.application.routes.draw do

  resources :animes, only: [:index, :show]
  resources :genres, only: [:index, :show]

  resources :users, only: [:new, :index, :update]
  post "/login", to: "auth#login"
  post "/signup", to: "users#create"
  get "/profile", to: "users#profile"
  get "/anime-genres", to: "ani_gens#index"
end
