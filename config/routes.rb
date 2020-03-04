Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      root 'budgets#index'
      resources :users do
        resources :budgets
      end
      resources :sessions 
      resources :budgets do
        resources :budget_totals
      end
    end
  end
end
