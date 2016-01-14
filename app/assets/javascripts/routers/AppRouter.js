var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        "": "index",
        "flight/:flight_num": "getFlight"
    },

    index: function() {
        var airlineAppView = new app.AirlineAppView();
        airlineAppView.render();
    },

    getFlight: function(flight_num) {
        var flight = app.flights.findWhere({ flight_number: parseInt(flight_num) });
        var reservationView = new app.ReservationView({ model: flight });
        reservationView.render();
    }
});