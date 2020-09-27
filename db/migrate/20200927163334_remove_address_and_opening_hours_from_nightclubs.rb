class RemoveAddressAndOpeningHoursFromNightclubs < ActiveRecord::Migration[5.2]
  def change
    remove_column :nightclubs, :opening_hours, :string
    remove_column :nightclubs, :address, :string
  end
end
