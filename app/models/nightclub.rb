class Nightclub < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    serialize :hours
    serialize :location
    serialize :engagement
    serialize :cover

    
end
