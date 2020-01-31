class AddPopularityToNightclubs < ActiveRecord::Migration[5.2]
  def change
    add_column :nightclubs, :popularity, :interger
  end
end
