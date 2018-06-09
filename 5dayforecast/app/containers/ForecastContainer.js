var React = require('react');
var Forecast = require('../components/Forecast');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

// stub
MARTINEZ = {"data":{"city":{"id":5370868,"name":"Martinez","coord":{"lon":-122.134132,"lat":38.019371},"country":"US","population":0},"cod":"200","message":0.0088,"cnt":5,"list":[{"dt":1459195200,"temp":{"day":288.15,"min":281.81,"max":288.33,"night":281.81,"eve":285.34,"morn":286.1},"pressure":1019.07,"humidity":51,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":9.31,"deg":339,"clouds":24},{"dt":1459281600,"temp":{"day":290.17,"min":278.76,"max":290.67,"night":278.76,"eve":284.81,"morn":281.1},"pressure":1018.13,"humidity":50,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":5.66,"deg":337,"clouds":0},{"dt":1459368000,"temp":{"day":293.87,"min":277.99,"max":294.64,"night":281.63,"eve":288.19,"morn":277.99},"pressure":1019.45,"humidity":61,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":3.37,"deg":339,"clouds":0},{"dt":1459454400,"temp":{"day":293.59,"min":280.19,"max":294.62,"night":280.35,"eve":288.86,"morn":280.19},"pressure":1026.39,"humidity":72,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":1.83,"deg":259,"clouds":0},{"dt":1459540800,"temp":{"day":289.31,"min":278.1,"max":292.84,"night":282.53,"eve":292.84,"morn":278.1},"pressure":1017.96,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":1.49,"deg":236,"clouds":0}]},"status":200,"statusText":"OK","headers":{"content-type":"application/json; charset=utf-8"},"config":{"transformRequest":{},"transformResponse":{},"headers":{"Accept":"application/json, text/plain, */*"},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","method":"get","url":"http://api.openweathermap.org/data/2.5/forecast/daily?q=Martinez, CA&type=accurate&APPID=c58172ee6b3cb9558c6ac7060b0bf36c&cnt=5"}}
WINSTON = {"data":{"city":{"id":4499612,"name":"Winston-Salem","coord":{"lon":-80.244217,"lat":36.099861},"country":"US","population":0},"cod":"200","message":0.0086,"cnt":5,"list":[{"dt":1459184400,"temp":{"day":294.6,"min":282.55,"max":294.6,"night":282.55,"eve":289.23,"morn":294.6},"pressure":998.72,"humidity":63,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":7.11,"deg":294,"clouds":0},{"dt":1459270800,"temp":{"day":290.31,"min":279.28,"max":291.64,"night":279.28,"eve":286.92,"morn":280.3},"pressure":1006.85,"humidity":63,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":3.41,"deg":340,"clouds":0},{"dt":1459357200,"temp":{"day":290.17,"min":277.08,"max":291.5,"night":285.73,"eve":288.24,"morn":277.08},"pressure":1013.08,"humidity":56,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":4.46,"deg":151,"clouds":0},{"dt":1459443600,"temp":{"day":293.67,"min":286.86,"max":293.67,"night":289.44,"eve":290.12,"morn":286.86},"pressure":999.61,"humidity":73,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10d"}],"speed":7.72,"deg":183,"clouds":80,"rain":19.31},{"dt":1459530000,"temp":{"day":295.26,"min":288.53,"max":295.26,"night":288.53,"eve":292.44,"morn":291.65},"pressure":989.59,"humidity":0,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10d"}],"speed":7.72,"deg":240,"clouds":96,"rain":13.95}]},"status":200,"statusText":"OK","headers":{"content-type":"application/json; charset=utf-8"},"config":{"transformRequest":{},"transformResponse":{},"headers":{"Accept":"application/json, text/plain, */*"},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","method":"get","url":"http://api.openweathermap.org/data/2.5/forecast/daily?q=Winston-Salem, NC&type=accurate&APPID=c58172ee6b3cb9558c6ac7060b0bf36c&cnt=5"}}

// ForecastContainer holds state for city and isLoading
// It also loads Forecast.
// Forecast has conditional logic of whether to show Load or results.

var ForecastContainer = React.createClass({
  contextTypes: {
   router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      forecast: "",
    }
  },
  handleClick: function(weather){
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    });
  },

  componentDidMount: function(){
    openWeatherHelpers.getFiveDayForecast(this.props.params.city)
      .then(function(forecast){
        console.log(JSON.stringify(forecast));
        this.setState({
          forecast: forecast,
          isLoading: false
        })
      }.bind(this))
  },
  render: function () {
    return (
      <div>
        <Forecast
          isLoading={this.state.isLoading}
          forecast={this.state.forecast}
          handleClick={this.handleClick}/>
      </div>
    )
  }
})

module.exports = ForecastContainer;
