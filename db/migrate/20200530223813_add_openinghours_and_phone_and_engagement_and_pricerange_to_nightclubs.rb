class AddOpeninghoursAndPhoneAndEngagementAndPricerangeToNightclubs < ActiveRecord::Migration[5.2]
  def change
    add_column :nightclubs, :opening_hours, :string
    add_column :nightclubs, :phone, :string
    add_column :nightclubs, :engagement, :string
    add_column :nightclubs, :price_range, :string
  end
end
