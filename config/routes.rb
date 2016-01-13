Rails.application.routes.draw do
  root "session#new"

  get "search" => "pages#search"

  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :reservations
  resources :flights
  resources :users
  resources :airplanes
end
