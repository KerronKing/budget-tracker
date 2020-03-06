Rails.application.routes.draw do
  post '/login', to: 'user_token#create'
  namespace :api do
    namespace :v1 do
      root 'budgets#index'
      resources :users
      resources :budgets
      # get '/user_logged_in', to: 'sessions#user_logged_in?'
      # post '/login', to: 'sessions#create'
      # delete '/logout', to: 'sessions#destroy'
      resources :budgets do
        resources :budget_totals
      end
    end
  end
end
