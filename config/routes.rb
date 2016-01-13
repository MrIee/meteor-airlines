Rails.application.routes.draw do
  root "pages#index"

  get "search" => "pages#search"

  resources :reservations
  resources :flights
  resources :users
  resources :airplanes
end
