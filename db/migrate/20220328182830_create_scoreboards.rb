class CreateScoreboards < ActiveRecord::Migration[6.1]
  def change
    create_table :scoreboards do |t|
      t.string :game

      t.timestamps
    end
  end
end
