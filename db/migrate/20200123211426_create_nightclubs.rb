class CreateNightclubs < ActiveRecord::Migration[5.2]
  def change
    create_table :nightclubs do |t|
      t.string :name
      t.string :address
      t.float :rating
      t.string :description
      t.string :url
      t.string :gid

      t.timestamps
    end
  end
end
