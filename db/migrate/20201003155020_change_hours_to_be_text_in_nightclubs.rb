class ChangeHoursToBeTextInNightclubs < ActiveRecord::Migration[5.2]
  def up
    change_column :nightclubs, :hours, :text
  end

  def down
    change_column :nightclubs, :hours, :string
  end
end
