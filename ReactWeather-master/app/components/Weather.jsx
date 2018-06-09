var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading:false
    }
  }

  ,handleSearch: function(locationName){

    var thisRef = this;
    this.setState({isLoading:true, errorMessage:undefined, location:undefined, temp:undefined});

    openWeatherMap.getTemp(locationName).then(function(temp){

      thisRef.setState({
        location: locationName,
        temp: temp,
        isLoading:false
      });

    },function(e){
      thisRef.setState({
        isLoading:false,
        errorMessage:e.message
      });
    });

  }

  ,componentDidMount:function(){

    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  ,componentWillReceiveProps:function(newProps){

    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  ,render:function(){

    var {location, temp, isLoading, errorMessage} = this.state;

    function renderMessage(){
        if (isLoading) {
          return (<h4 className="text-center">Fetching weather...</h4>);
        }else if (location && temp) {
          return (<WeatherMessage location={location} temp={temp}/>);
        }
    }

    function renderError(){
        if (typeof errorMessage === 'string') {
          return(
            <ErrorModal message={errorMessage}/>
          )
        }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
