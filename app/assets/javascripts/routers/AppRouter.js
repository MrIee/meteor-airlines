var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        "": "index",
        "/flight:id": "getFlight"
    },

    index: function() {
        var airlineAppView = new app.AirlineAppView();
        airlineAppView.render();

        var searchFormView = new app.SearchFormView();
        searchFormView.render();
    }
});