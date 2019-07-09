class AnimesController < ApplicationController

  def index
    animes = Anime.all
    render json: animes
  end

  def show
    anime = Anime.find(params[:id])
    render json: anime
  end

end
