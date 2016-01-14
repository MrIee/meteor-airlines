var app = app || {};

Reservation = Backbone.Model.extend({
    urlRoot: "/reservations",
    defaults: {},

    initialize: function() {
        this..on("add", function(reservation) {
            var reservationView = new app.ReservationView({ model: reservation });

            reservationView.render();
        });
    }
});