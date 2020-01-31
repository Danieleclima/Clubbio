# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_26_183524) do

  create_table "nightclubs", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.float "rating"
    t.string "description"
    t.string "url"
    t.string "gid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "popularity"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "nightclub_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.date "date"
    t.index ["nightclub_id"], name: "index_reviews_on_nightclub_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "gender"
    t.integer "age"
    t.date "date_of_birth"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
