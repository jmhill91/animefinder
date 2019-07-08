class AnimeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :watch_link, :image
end
