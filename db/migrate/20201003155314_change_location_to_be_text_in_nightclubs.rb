class ChangeLocationToBeTextInNightclubs < ActiveRecord::Migration[5.2]
  def up
    change_column :nightclubs, :location, :text
  end

  def down
    change_column :nightclubs, :location, :string
  end
end
