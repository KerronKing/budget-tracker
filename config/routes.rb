Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :budgets
      resources :budget_totals
    end
  end
end
