class UserGenreSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :user
  belongs_to :genre 
end
