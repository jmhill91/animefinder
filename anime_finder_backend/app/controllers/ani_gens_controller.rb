class AniGensController < ApplicationController
  def index
    ani_gens = AniGen.all
    render json: ani_gens
  end
end
