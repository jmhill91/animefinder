class User < ApplicationRecord
  has_many :user_genres
  has_many :genres, through: :user_genres
  has_many :favorites
  has_many :anime, through: :favorites

  has_secure_password
  validates :username, uniqueness: { case_sensitive: false}
end
