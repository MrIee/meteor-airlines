var app = app || {};

app.FlightListView = Backbone.View.extend({
    tagName: "tr",

    events: {
        "click a": "showFlight"
    },

    showFlight: function() {
        app.router.navigate("flight/" + this.model.get("flight_number"), true);
    },

    render: function() {
        var flightListViewTemplater = _.template( $("#flightTemplate").html() );
        this.$el.html( flightListViewTemplater( this.model.toJSON() ) );
        this.$el.appendTo("#searchResults");
    }
});