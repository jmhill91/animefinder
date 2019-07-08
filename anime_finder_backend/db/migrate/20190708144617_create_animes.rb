class CreateAnimes < ActiveRecord::Migration[5.2]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :description
      t.string :watch_link
      t.string :image
      t.integer :rating
      t.string :start_date
      t.string :end_date
      t.string :tv_rating
      t.string :image
      t.integer :episode_count

      t.timestamps
    end
  end
end
