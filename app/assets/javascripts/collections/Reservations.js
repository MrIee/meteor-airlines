var app = app || {};

app.Reservations = Backbone.Collection.extend({
    model: app.Reservation,
    url: "/reservations",

    initialize: function() {
        this.on("add", function(reservation) {
            var reservationView = new app.ReservationView({ model: reservation });

            reservationView.render();
        });
    }
});