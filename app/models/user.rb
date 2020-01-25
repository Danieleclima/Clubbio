class User < ApplicationRecord
    has_many :reviews
    has_many :nightclubs, through: :reviews  
end
