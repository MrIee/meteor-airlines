Flight.destroy_all
User.destroy_all
Airplane.destroy_all

u1 = User.create :id => 7, :name => 'Alex', :email => 'alex@alex.com', :admin => false, :password => "chicken"
u2 = User.create :id => 8, :name => 'Toby', :email => 'toby@toby.com', :admin => true, :password => "chicken"
u3 = User.create :id => 9, :name => 'Rhi', :email => 'rhi@rhi.com', :admin => false, :password => "chicken"

a1 = Airplane.create :name => '007', :rows => 10, :columns => 6
a2 = Airplane.create :name => '420', :rows => 10, :columns => 6
a3 = Airplane.create :name => '900', :rows => 10, :columns => 6

f1 = Flight.create :flight_number => 10, :origin => 'SYD', :destination => 'MLB', :date => '2016-12-01 18:30', :airplane_id => a1.id
f2 = Flight.create :flight_number => 119, :origin => 'SYD', :destination => 'MLB', :date => '2016-10-01 18:30', :airplane_id => a2.id
<<<<<<< HEAD
f3 = Flight.create :flight_number => 212, :origin => 'SYD', :destination => 'MLB', :date => '2016-11-01 18:30', :airplane_id => a3.id
=======
f3 = Flight.create :flight_number => 212, :origin => 'SYD', :destination => 'MLB', :date => '2016-11-01 18:30', :airplane_id => a3.id

>>>>>>> 73c3f6c52ede998d0115200a761c0492f845dde8
