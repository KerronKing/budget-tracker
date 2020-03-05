Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      root 'budgets#index'
      resources :users do
        resources :budgets
      end
      post '/login', to: 'sessions#create'
      post '/logout', to: 'sessions#destroy'
      resources :budgets do
        resources :budget_totals
      end
    end
  end
end
