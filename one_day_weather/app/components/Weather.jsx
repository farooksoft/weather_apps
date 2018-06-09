var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            is_loading: false
        };
    },
    handleSearch: function (location) {
        var self = this;
        this.setState({
            is_loading: true
        });
        openWeatherMap.getTemp(location).then(function (res) {
            self.setState({
                location: res.city,
                temp: res.temp,
                is_loading: false
            });
        }, function (error_message) {
            self.setState({
                is_loading: false
            });
            alert(error_message);
        });
    },
    render: function () {
        var {is_loading, location, temp} = this.state;

        function renderMessage() {
            if (is_loading) {
                return (
                    <p>Loading information ...</p>
                );
            } else if (temp && location) {
                return (
                    <WeatherMessage location={location} temp={temp}/>
                );
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm handleSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;