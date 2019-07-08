class CreateAnimes < ActiveRecord::Migration[5.2]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :description
      t.string :watch_link
      t.string :image
      t.integer :rating

      t.timestamps
    end
  end
end
