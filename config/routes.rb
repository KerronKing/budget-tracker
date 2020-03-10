Rails.application.routes.draw do
  post '/login', to: 'user_token#create'
  namespace :api do
    namespace :v1 do
      root 'budgets#index'
      resources :users
      resources :budgets
      resources :budgets do
        resources :budget_totals
      end
    end
  end
end
