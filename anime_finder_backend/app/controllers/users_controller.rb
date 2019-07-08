class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { token: encode_token(user_payload(user)) }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def profile
    render json: current_user
  end

  private
  def user_params
    params.permit(:username, :password, :profile_picture)
  end
end
