var app = app || {};

app.ReservationView = Backbone.View.extend({
    el: "#main",

    createReservation: function() {
        var reservation = new app.Reservation();
        reservation.set({
            user_id:
            flight_id: this.model.get("flight_number"),
            seat_row: 1,
            seat_column: 1
        });

        reservation.save();

        app.Reservations.add( reservation );
    },

    render: function() {

    }
});