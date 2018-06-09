var React = require('react');
var PropTypes = React.PropTypes;
var Day = require('./Day');
var convertTemp = require('../utils/utils').convertTemp;

var styles = {
  header: {
    paddingTop: 10,
    fontSize: 35,
    fontWeight: 100,
  },
  dayDetails: {
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  },
}

function CityDetails (props) {
  var getDescription = props.weather.weather[0].description;
  var getHumidity = props.weather.humidity;

  return (
    <div>
      <Day weather={props.weather}></Day>
      <h1 style={styles.header}>
        <span style={styles.dayDetails}>
          <p>{props.city}</p>
          <p>{getDescription}</p>
          <p>min temp: {convertTemp(props.weather.temp.min)}º C</p>
          <p>max temp: {convertTemp(props.weather.temp.max)}º C</p>
          <p>humidity: {getHumidity}</p>
        </span>
      </h1>
    </div>
  )
}

CityDetails.propTypes = {
  weather: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = CityDetails;
