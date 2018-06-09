var React = require('react');
var DayInfos = require('./DayInfos.jsx');
var MainInfoPanel = require('./MainInfoPanel.jsx');

var WeatherApp = React.createClass({
  setData: function() {
    var that = this;
    
    var apiData = new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
     
      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if (request.status === 200) {
            var json = JSON.parse(request.responseText);
           
            if (json.cod === "404") {
                reject(json.message);  
            } else {
                resolve(json);
            }
          } else {
            reject('HTTP request on openweathermap has failed.');
          } 
        }
      }
      request.open('get', 'http://api.openweathermap.org/data/2.5/forecast?units=metric&q=' +
                           that.state.searchCrit +
                           '&mode=json&appid=efcd313fa7a139f2fb20de306648eb8d');
      request.send();
    });

    apiData.then(function(weatherData) {
      this.setState({
        data: weatherData,
        loaded: true
      });
    }.bind(this), function(message) {
      console.log(message);
    });
  },
  getInitialState: function() {
    return {    
      data: null,
      loaded: false,
      searchCrit: 'san francisco'
    }
  },
  setSearchCrit: function(newSearchCrit) {
    this.setState({
      searchCrit: newSearchCrit
    });

    this.setData();
  },
  componentWillMount: function() { // Call before the initial rendering
    this.setData();
  },
  render: function() {
   
    if (this.state.loaded) {  // Make sure the data is available.
      let daysData = [];
      let today = new Date();

      today.setHours(23, 59, 59, 999);
      today = today.getTime();

      this.state.data.list.forEach(function(day) { 
        var currentDate = new Date(day.dt * 1000);
     
        if ((day.dt * 1000) > today && currentDate.getHours() === 11) {
          daysData.push(<DayInfos weatherData={ day } />);
        }
      });

      return (
        <div className="weather-app" ref="app" >
          <MainInfoPanel city={ this.state.data.city }
                         today={ this.state.data.list[0] }
                         changeHandler={ this.setSearchCrit }
                         icon={ this.state.data.list[0].weather[0].icon } 
                         description={ this.state.data.list[0].weather[0].description }
                         ref="mainInfo" />
          { daysData }
        </div>
      );
    } else {
      return ( 
        <div className="ajax-loader-container">
          <div className="ajax-loader"></div>
        </div>
      );
    }
  }
});

module.exports = WeatherApp;