class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :password_digest, :profile_picture
  has_many :genres
end
