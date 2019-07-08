class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :password_digest, :profile_picture
end
