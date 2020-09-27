class AddSingleLineAddressAndHoursAndLocationAndClosedToNightclubs < ActiveRecord::Migration[5.2]
  def change
    add_column :nightclubs, :single_line_address, :string
    add_column :nightclubs, :hours, :string
    add_column :nightclubs, :location, :string
    add_column :nightclubs, :is_permanently_closed, :boolean
  end
end
