class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :registerable, :recoverable, :rememberable, :validatable
         
  

    has_secure_password
    has_many :reviews
    has_many :nightclubs, through: :reviews  
end
