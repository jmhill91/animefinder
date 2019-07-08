class Anime < ApplicationRecord
  has_many :favorites
  has_many :users, through: :favorites
  has_many :ani_gens
  has_many :genres, through: :ani_gens
end
