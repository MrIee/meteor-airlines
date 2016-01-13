var app = app || {};

app.AirlineAppView = Backbone.View.extend({
    el: "#main",

    render: function() {
        var airlineAppViewTemplate = $("#airlineAppViewTemplate").html();
        this.$el.html(airlineAppViewTemplate);

        var searchFormView = new app.SearchFormView();
        searchFormView.render();
    }
});