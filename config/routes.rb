Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'user_token' => 'user_token#create'
      root 'budgets#index'
      resources :users do
        resources :budgets
      end
      # get '/user_logged_in', to: 'sessions#user_logged_in?'
      # post '/login', to: 'sessions#create'
      # delete '/logout', to: 'sessions#destroy'
      resources :budgets do
        resources :budget_totals
      end
    end
  end
end
