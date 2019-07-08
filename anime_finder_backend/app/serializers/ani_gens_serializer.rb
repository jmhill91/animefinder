class AniGensSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :anime
  belongs_to :genre
end
