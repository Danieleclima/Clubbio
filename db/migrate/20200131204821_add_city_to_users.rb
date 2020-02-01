class AddCityToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :city, :string
    add_column :users, :postcode, :string
    add_column :users, :email, :string
  end
end
