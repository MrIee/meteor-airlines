var app = app || {};

$(document).ready(function() {
    app.flights = new app.Flights();
    app.flights.fetch();

    app.router = new app.AppRouter();
    Backbone.history.start();
});