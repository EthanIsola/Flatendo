class CreateScorecards < ActiveRecord::Migration[6.1]
  def change
    create_table :scorecards do |t|
      t.integer :game1
      t.integer :game2
      t.integer :game3
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :scoreboard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
