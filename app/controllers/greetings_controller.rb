class GreetingsController < ApplicationController
  def index
    greeting = Greeting.order('RANDOM()')
    render json: greeting
  end

  def create; end

  def update; end

  def destroy; end
end
