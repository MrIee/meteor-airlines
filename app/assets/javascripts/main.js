var app = app || {};

$(document).ready(function() {
    app.flights = new app.Flights();
    app.flights.fetch();

    app.reservations = new app.Reservations();

    setInterval(function() {
        app.reservations.fetch();
    }, 1000);

    app.router = new app.AppRouter();
    Backbone.history.start();
});