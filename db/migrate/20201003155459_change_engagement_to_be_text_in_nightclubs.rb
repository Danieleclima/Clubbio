class ChangeEngagementToBeTextInNightclubs < ActiveRecord::Migration[5.2]
  def up
    change_column :nightclubs, :engagement, :text
  end

  def down
    change_column :nightclubs, :engagement, :string
  end
end
