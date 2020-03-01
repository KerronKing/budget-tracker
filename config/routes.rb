Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :users, only: %i[show index]
      resources :budgets
      resources :budget_totals
    end
  end
end
