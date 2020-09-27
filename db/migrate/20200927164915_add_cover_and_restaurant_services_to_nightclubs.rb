class AddCoverAndRestaurantServicesToNightclubs < ActiveRecord::Migration[5.2]
  def change
    add_column :nightclubs, :cover, :string
    add_column :nightclubs, :restaurant_services, :string
  end
end
