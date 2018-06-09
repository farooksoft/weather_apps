var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('../components/Loading');
var Day = require('./Day');

var styles = {
  header: {
    paddingTop: 20,
    fontSize: 55,
    fontWeight: 100,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 5,
    fontSize: 30,
    fontWeight: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center'
  },
  dayContainer: {
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  }
}

CITY = {
	"data": {
		"city": {
			"id": 1273840,
			"name": "Connaught Place",
			"coord": {
				"lon": 77.216667,
				"lat": 28.633333
			},
			"country": "IN",
			"population": 0
		},
		"cod": "200",
		"message": 0.0068,
		"cnt": 5,
		"list": [{
			"dt": 1458972000,
			"temp": {
				"day": 297.15,
				"min": 297.15,
				"max": 297.15,
				"night": 297.15,
				"eve": 297.15,
				"morn": 297.15
			},
			"pressure": 999.36,
			"humidity": 54,
			"weather": [{
				"id": 802,
				"main": "Clouds",
				"description": "scattered clouds",
				"icon": "03n"
			}],
			"speed": 4.21,
			"deg": 300,
			"clouds": 44
		}, {
			"dt": 1459058400,
			"temp": {
				"day": 303.21,
				"min": 293.04,
				"max": 305.79,
				"night": 293.57,
				"eve": 304.12,
				"morn": 293.04
			},
			"pressure": 1000.38,
			"humidity": 58,
			"weather": [{
				"id": 802,
				"main": "Clouds",
				"description": "scattered clouds",
				"icon": "03d"
			}],
			"speed": 2.74,
			"deg": 304,
			"clouds": 48
		}, {
			"dt": 1459144800,
			"temp": {
				"day": 301.02,
				"min": 288.32,
				"max": 303.4,
				"night": 292.84,
				"eve": 302.11,
				"morn": 288.32
			},
			"pressure": 1000.87,
			"humidity": 60,
			"weather": [{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}],
			"speed": 0.86,
			"deg": 265,
			"clouds": 0
		}, {
			"dt": 1459231200,
			"temp": {
				"day": 300.66,
				"min": 288.11,
				"max": 303.49,
				"night": 293.45,
				"eve": 302.58,
				"morn": 288.11
			},
			"pressure": 998.85,
			"humidity": 55,
			"weather": [{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}],
			"speed": 2.83,
			"deg": 312,
			"clouds": 0
		}, {
			"dt": 1459317600,
			"temp": {
				"day": 301.96,
				"min": 289.27,
				"max": 304.93,
				"night": 293.75,
				"eve": 304.09,
				"morn": 289.27
			},
			"pressure": 999.12,
			"humidity": 52,
			"weather": [{
				"id": 803,
				"main": "Clouds",
				"description": "broken clouds",
				"icon": "04d"
			}],
			"speed": 2.12,
			"deg": 276,
			"clouds": 56
		}]
	},
	"status": 200,
	"statusText": "OK",
	"headers": {
		"content-type": "application/json; charset=utf-8"
	},
	"config": {
		"transformRequest": {},
		"transformResponse": {},
		"headers": {
			"Accept": "application/json, text/plain, */*"
		},
		"timeout": 0,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"method": "get",
		"url": "http://api.openweathermap.org/data/2.5/forecast/daily?q=undefined&type=accurate&APPID=c58172ee6b3cb9558c6ac7060b0bf36c&cnt=5"
	}
}

function Forecast (props) {
 if (props.isLoading === true) {
   return (
     <Loading speed={100} text="One Moment" />
   )
 }
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{props.forecast.data.city.name}</h1>
      <h1 style={styles.title}>Select a day</h1>
      <div style={styles.dayContainer}>
        {
          props.forecast.data.list.map(function(item, index){
            // debugger
            return (
              <Day
                key={index}
                weather={item}
                onClick={props.handleClick.bind(null, item)}/>
            );
          })
        }
      </div>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = Forecast;
