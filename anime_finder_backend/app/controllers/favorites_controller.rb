class FavoritesController < ApplicationController
  def create
    favorite = Favorite.create(user_id: current_user.id, anime_id: params[:anime_id])
  end
end
