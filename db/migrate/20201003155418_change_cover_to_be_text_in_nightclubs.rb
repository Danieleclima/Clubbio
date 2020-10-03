class ChangeCoverToBeTextInNightclubs < ActiveRecord::Migration[5.2]
  def up
    change_column :nightclubs, :cover, :text
  end

  def down
    change_column :nightclubs, :cover, :string
  end
end
