# == Schema Information
#
# Table name: airplanes
#
#  id          :integer          not null, primary key
#  name        :string
#  seat_row    :integer
#  seat_column :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Airplane < ActiveRecord::Base
    has_many :flights
end
