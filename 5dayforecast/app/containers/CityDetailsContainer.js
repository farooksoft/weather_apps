var React = require('react');
var CityDetails = require('../components/CityDetails');

var CityDetailsContainer = React.createClass({

  render: function () {
    return (
      <div>
        <CityDetails
          city={this.props.routeParams.city}
          weather={this.props.location.state.weather} />
      </div>
    )
  }
});

module.exports = CityDetailsContainer;
