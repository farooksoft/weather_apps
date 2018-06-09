var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.handleSearch(location);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Enter city name" ref="location" />
                <button>Get weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;