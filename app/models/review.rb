class Review < ApplicationRecord
  belongs_to :nightclub
  belongs_to :user
end
