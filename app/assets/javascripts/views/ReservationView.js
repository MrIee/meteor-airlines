var app = app || {};

app.ReservationView = Backbone.View.extend({
    el: "#main",

    createReservation: function() {
        var reservation = new app.Reservation();
        reservation.set({
            // user_id:
            flight_id: this.model.get("flight_number"),
            seat_row: 1,
            seat_column: 1
        });

        reservation.save();

        app.Reservations.add( reservation );
    },

    render: function() {
        var airplane = app.airplanes.findWhere({ airplane_id: this.model.get("airplane_id") });

        var row = airplane.get("rows");
        var column = airplane.get("columns");
        var seatingHTML = "<table>"
        for (var i = 0; i < row; i++) {
            seatingHTML += "<tr>"
            for (var j = 0; j < column; j++) {
                seatingHTML += "<td>"
                seatingHTML += "Alex"
                seatingHTML += "</td>"
            }
            seatingHTML += "</tr>"
        }
        this.$el.html(seatingHTML);
    }
});