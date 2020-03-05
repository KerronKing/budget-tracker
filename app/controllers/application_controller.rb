class ApplicationController < ActionController::API
  include Knock::Authenticable
  include Response
  include ExceptionHandler
end
