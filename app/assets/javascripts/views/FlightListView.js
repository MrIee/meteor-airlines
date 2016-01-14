var app = app || {};

app.FlightListView = Backbone.View.extend({
    tagName: "tr",

    events: {
        "click": "showFlight"
    },

    showFlight: function() {
        app.router.navigate("flight/" + this.model.get("flight_number"), true);
    },

    render: function() {
        var flightListViewTemplater = _.template( $("#flightTemplate").html() );
        var dateFormat = moment(this.model.get("date"));
        dateFormat = dateFormat.format("L");
        this.model.set({ date: dateFormat });

        this.$el.html( flightListViewTemplater( this.model.toJSON() ) );
        this.$el.appendTo("#searchResults");
    }
});