api_mime_types = %W(
  application/vnd.api+json
  text/json
  application/json
)
# Add new mime types for use in respond_to blocks:
Mime::Type.register "application/vnd.api+json", :json, api_mime_types
