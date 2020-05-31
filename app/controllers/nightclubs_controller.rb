require 'httparty'
require 'pry'

class NightclubsController < ApplicationController

    def nightclub
        id = request.referer.split('/').last
        response = HTTParty.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=#{id}&fields=name,rating,formatted_phone_number,photo,adr_address&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo")
        render json: response
    end

    def create

    end

    def nightclub_params
        params.require(:venues).permit(:name)
    end
end
