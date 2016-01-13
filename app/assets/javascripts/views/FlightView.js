var app = app || {};

app.FlightView = Backbone.View.extend({
    el: "#main",

    render: function() {
        console.log(this.model.get("flight_number"));
    }
});