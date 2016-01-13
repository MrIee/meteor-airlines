var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        "": "index",
        "/flight:id": "getFlight"
    },

    index: function() {
        var appView = new app.AppView();
        appView.render();
    }
});