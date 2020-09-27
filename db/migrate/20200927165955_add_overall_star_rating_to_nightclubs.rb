class AddOverallStarRatingToNightclubs < ActiveRecord::Migration[5.2]
  def change
    add_column :nightclubs, :overall_star_rating, :float
  end
end
