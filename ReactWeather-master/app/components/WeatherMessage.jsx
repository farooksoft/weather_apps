var React = require('react');

var WeatherMessage = React.createClass({

  render:function(){
    return(
      <div>
        <h4 className="text-center">It's {this.props.temp}  in {this.props.location}.</h4>
      </div>
    );
  }
});

module.exports = WeatherMessage;
