Rails.application.routes.draw do
  root :to =>"homes#top"
  get '/home/index' => 'homes#index', as: 'index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
