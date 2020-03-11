class ApplicationController < ActionController::API
  include Knock::Authenticable
  include Response
  include ExceptionHandler
  include ActionController::Serialization
end
