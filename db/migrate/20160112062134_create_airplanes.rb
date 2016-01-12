class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name
      t.integer :seat_row
      t.string :seat_column

      t.timestamps null: false
    end
  end
end
