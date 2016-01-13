Flight.destroy_all
Reservation.destroy_all
User.destroy_all
Airplane.destroy_all

u1 = User.create :id => 7, :name => 'Alex', :email => 'alex@alex.com', :admin => false
u2 = User.create :id => 8, :name => 'Toby', :email => 'toby@toby.com', :admin => true
u3 = User.create :id => 9, :name => 'Rhi', :email => 'rhi@rhi.com', :admin => false

a1 = Airplane.create :id => 4, :name => '007', :seat_row => 5, :seat_column => 5

# r1 = Reservation.create :id => 7, :name => 'Alex', :email => 'alex@alex.com', :admin => false

f1 = Flight.create :id => 1, :origin => 'SYD', :destination => 'MLB', :date => '2016-12-01', :airplane_id => 4