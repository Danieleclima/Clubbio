class RemoveRatingFromNightclubs < ActiveRecord::Migration[5.2]
  def change
    remove_column :nightclubs, :rating, :float
  end
end
