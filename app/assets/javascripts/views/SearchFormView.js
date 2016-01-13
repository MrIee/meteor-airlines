var app = app || {};

app.SearchFormView = Backbone.View.extend({
    el: "#searchForm",

    events: {
        "submit form": "searchFlight",
    },

    searchFlight: function(event) {
        event.preventDefault();
        var flightOrigin = this.$el.find("#origin").val();
        var flightDestination = this.$el.find("#destination").val();
        if (flightOrigin.length === 0 && flightDestination === 0) {
            return;
        }

        var resultSet = app.flights.where({ origin: flightOrigin, destination: flightDestination });

        $("#searchResults").empty();


        $("#searchResults").addClass("searchResults");
        var tableHeaders = "<tr><th>Plane Number</th><th>Flight Number</th><th>Origin</th><th>Destination</th><th>Date</th></tr>";
        $("#searchResults").append(tableHeaders);

        _.each(resultSet, function(flight) {

            var flightListView = new app.FlightListView({ model: flight });
            flightListView.render();

            // var el = flight.attributes;

            // var flightHTML = "<tr><td>" + el.airplane_id + "</td><td><a>" + el.flight_number + "</a></td><td>" + el.origin + "</td><td>" + el.destination + "</td><td>" + el.date + "</td></tr>";

            // $("#searchResults").append(flightHTML);
        });

        //console.log(resultSet);
    },

    render: function() {
        var searchFormViewTemplate = $("#searchFormTemplate").html();
        this.$el.html(searchFormViewTemplate);
    }
});
