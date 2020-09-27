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

ActiveRecord::Schema.define(version: 2020_09_27_165955) do

  create_table "nightclubs", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "url"
    t.string "gid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "popularity"
    t.string "phone"
    t.string "engagement"
    t.string "price_range"
    t.string "single_line_address"
    t.string "hours"
    t.string "location"
    t.boolean "is_permanently_closed"
    t.string "cover"
    t.string "restaurant_services"
    t.float "overall_star_rating"
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
    t.string "password_digest"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "provider"
    t.string "uid"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
