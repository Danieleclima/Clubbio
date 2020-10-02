require 'httparty'
require 'pry'
require 'json'
require 'ostruct'

class NightclubsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def nightclub
        id = request.referer.split('/').last
        response = HTTParty.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=#{id}&fields=name,rating,formatted_phone_number,photo,adr_address&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo")
        render json: response
    end

    def create
        binding.pry
            current_clubs = []
            nightclubs = JSON.parse(nightclub_params.to_json)
            nightclubs[:venues].each do |nightclub|
                # this method will find the nightclub on the db, if it already exists, otherwise it will create one with the name and address and then update it.
             list = Nightclub.find_or_create_by(name: nightclub[:name], single_line_address: nightclub[:single_line_address]) do |venue|
                venue.update(overall_star_rating: nightclub[:overall_star_rating], description: nightclub[:description], engagement: nightclub[:engagement], phone: nightclub[:phone], price_range: nightclub[:price_range],is_permanently_closed: nightclub[:is_permanently_closed], hours: nightclub[:hours], location: nightclub[:location], restaurant_services: nightclub[:restaurant_services], cover: nightclub[:cover])
             end
             current_clubs.push(list)
            end
            binding.pry
        render json: current_clubs.uniq
    end

    def nightclub_params
        params.permit(venues:[:name, :overall_star_rating,:single_line_address, :description, :engagement, :phone, :price_range, :is_permanently_closed, :id, {hours: [:key, :value]}, location: {}, cover:{}, engagement:{}, restaurant_services:{}])
    end
end
