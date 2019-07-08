class CreateAniGens < ActiveRecord::Migration[5.2]
  def change
    create_table :ani_gens do |t|
      t.references :anime, foreign_key: true
      t.references :genre, foreign_key: true

      t.timestamps
    end
  end
end
