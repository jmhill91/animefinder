# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'
require 'rest-client'

Anime.delete_all
Genre.delete_all
AniGen.delete_all

def generateAnime
  anime_info = []
  for id in (1..14267)
    begin
      response_string = RestClient.get("https://kitsu.io/api/edge/anime/#{id}")
      puts "anime id: #{id}"
    rescue RestClient::ExceptionWithResponse => e
      puts "error from id: #{id}"
      puts e.response.body
      next
    end
    response_hash = JSON.parse(response_string)
    anime_info.push(response_hash)

    if anime_info.last["data"]["attributes"]["posterImage"] == nil 
      anime_info.last["data"]["attributes"]["posterImage"] = {}
      anime_info.last["data"]["attributes"]["posterImage"]["tiny"] = "https://cdn.pastemagazine.com/www/articles/Sailor%20Moon%20Anime%2050.jpg"
    end

    
    Anime.create(
      id: "#{anime_info.last["data"]["id"]}",
      title: "#{anime_info.last["data"]["attributes"]["titles"]["en"]}",
      description: "#{anime_info.last["data"]["attributes"]["synopsis"]}",
      image: "#{anime_info.last["data"]["attributes"]["posterImage"]["tiny"]}",
      rating: "#{anime_info.last["data"]["attributes"]["averageRating"]}",
      start_date: "#{anime_info.last["data"]["attributes"]["startDate"]}",
      end_date: "#{anime_info.last["data"]["attributes"]["endDate"]}",
      tv_rating: "#{anime_info.last["data"]["attributes"]["ageRating"]}",
      episode_count: "#{anime_info.last["data"]["attributes"]["episodeCount"]}",
      watch_link: "https://www.youtube.com/results?search_query=#{anime_info.last["data"]["attributes"]["slug"].gsub! '-', '+'}"
    )
  end      
end

def generateGenres
  genre_info = []
  for id in (1..65)
    begin
      response_string = RestClient.get("https://kitsu.io/api/edge/genres/#{id}")
      puts "genre id: #{id}"
    rescue RestClient::ExceptionWithResponse => e
      puts "error from id: #{id}"
      puts e.response.body
      next
    end
    response_hash = JSON.parse(response_string)
    genre_info.push(response_hash)

    Genre.create(
      id: "#{genre_info.last["data"]["id"]}",
      genre_type: "#{genre_info.last["data"]["attributes"]["name"]}"
    )
  end
end

def generateAniGens
  anigens_info = []
  for id in (1..14267)
    begin
      response_string = RestClient.get("https://kitsu.io/api/edge/anime/#{id}/genres")
      puts "anime_genre id: #{id}"
    rescue RestClient::ExceptionWithResponse => e
      puts "error from id: #{id}"
      puts e.response.body
      next
    end
    response_hash = JSON.parse(response_string)
    anigens_info.push(response_hash)

    anigens_info.last["data"].each do |genre|
      AniGen.create( anime_id: "#{id}", genre_id: "#{genre["id"]}" )
    end

  end
end


generateAnime
generateGenres
generateAniGens