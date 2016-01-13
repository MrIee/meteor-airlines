var app = app || {};

app.AppView = Backbone.View.extend({
    el: "#main",

    render: function() {
        var flightSearchView = $("#flightSearchViewTemplate").html();
        this.$el.html(appViewTemplate);
    }
});