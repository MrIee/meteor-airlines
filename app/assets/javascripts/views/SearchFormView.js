var app = app || {};

app.SearchFormView = Backbone.View.extend({
    el: "#main",

    render: function() {
        var searchFormViewTemplate = $("#searchFormTemplate").html();
        this.$el.html(searchFormViewTemplate);
    }
});