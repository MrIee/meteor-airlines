# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  flight_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ActiveRecord::Base
    has_and_belongs_to_many :users
    has_and_belongs_to_many :flights
end
