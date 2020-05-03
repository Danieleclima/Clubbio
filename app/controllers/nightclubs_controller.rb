require 'httparty'
require 'pry'

class NightclubsController < ApplicationController

    def nightclub
        binding.pry
        response = HTTParty.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJgdjr1bUcdkgRpZi5zdi4KOo&fields=name,rating,formatted_phone_number,photo,adr_address&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo")
        binding.pry
        render json: response
    end

end
