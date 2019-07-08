class Genre < ApplicationRecord
  has_many :ani_gens
  has_many :anime, through: :ani_gens
  has_many :user_genres
  has_many :users, through: :user_genres
end
