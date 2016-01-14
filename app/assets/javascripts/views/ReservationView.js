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
        var selectedFlightTemplate = _.template( $("#flightTemplate").html() );
        var dateFormat = moment(this.model.get("date"));
        dateFormat = dateFormat.format("L");
        this.model.set({ date: dateFormat });

        var seatingHTML = "<table id='flightInfo'><tr>";
        seatingHTML += selectedFlightTemplate( this.model.toJSON() );
        seatingHTML += "</tr></table>";

        var airplane = app.airplanes.findWhere({ id: this.model.get("airplane_id") });
        var row = airplane.get("rows");
        var column = airplane.get("columns");

        seatingHTML += "<table id='reservationTable'>"

        for (var i = 1; i < row; i++) {
            seatingHTML += "<tr>"
            for (var j = 0; j < column; j++) {
                seatingHTML += "<td>"
                seatingHTML += "seat " + i + String.fromCharCode(65 + j)
                seatingHTML += "</td>"
            }
            seatingHTML += "</tr>"
        }
         console.log(seatingHTML);
        this.$el.html(seatingHTML);
    }
});