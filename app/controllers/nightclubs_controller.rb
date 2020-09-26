require 'httparty'
require 'pry'

class NightclubsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def nightclub
        id = request.referer.split('/').last
        response = HTTParty.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=#{id}&fields=name,rating,formatted_phone_number,photo,adr_address&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo")
        render json: response
    end

    def create
        binding.pry
            
            Nightclub.find_or_create_by(name: nightclub.name) do |venue|
                venue.address = nightclub.address
                venue.opening_hours = nightclub.opening_hours
                venue.description = nightclub.description
                venue.url = nightclub.url
                venue.opening_hours = nightclub.opening_hours
                venue.phone = nightclub.phone
                venue.rating = nightclub.rating
                venue.price_range = nightclub.price_range
            end
    end

    def nightclub_params
        params.permit(venues:[:name, :hours => [[:key, :value]], {:location => [:city]}, :overall_star_rating, :single_line_address, :cover, :description, :engagement, :phone, :price_range, :is_permanently_closed, :id]
    end
end
