Flight.destroy_all
User.destroy_all
Airplane.destroy_all

u1 = User.create :id => 7, :name => 'Alex', :email => 'alex@alex.com', :admin => false, :password => "chicken"
u2 = User.create :id => 8, :name => 'Toby', :email => 'toby@toby.com', :admin => true, :password => "chicken"
u3 = User.create :id => 9, :name => 'Rhi', :email => 'rhi@rhi.com', :admin => false, :password => "chicken"

a1 = Airplane.create :id => 4, :name => '007', :seat_row => 5, :seat_column => 5
a2 = Airplane.create :id => 5, :name => '420', :seat_row => 3, :seat_column => 6
a3 = Airplane.create :id => 6, :name => '900', :seat_row => 2, :seat_column => 8

f1 = Flight.create :flight_number => 10, :origin => 'SYD', :destination => 'MLB', :date => '2016-12-01 18:30', :airplane_id => 4
f2 = Flight.create :flight_number => 11, :origin => 'DOG', :destination => 'CAT', :date => '2017-11-22', :airplane_id => 6
f3 = Flight.create :flight_number => 12, :origin => 'POO', :destination => 'MAP', :date => '2013-02-9', :airplane_id => 5
