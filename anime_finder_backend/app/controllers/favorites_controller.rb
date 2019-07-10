class FavoritesController < ApplicationController
  def create
    favorite = Favorite.create(user_id: current_user.id, anime_id: params[:anime_id])
  end

  def index
    favorites = Favorite.all
    render json: favorites
  end
end
