var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils/utils');

var styles = {
  container: {
    minWidth: 207,
    margin: 30,
    display:'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  body: {
    paddingTop: 10,
    fontSize: 29,
    fontWeight: 100,
  },
  image: {
    width: 128,
    height: 130,
  }
}

function Day (props) {
  var icon = props.weather.weather[0].icon;
  var date = utils.getDate(props.weather.dt);
  return (
    <div onClick={props.onClick}>
        <div style={styles.container}>
          <img style={styles.image} src={ "app/images/weather-icons/" + icon + ".svg" }/>
          <div style={styles.body}>
            {date}
          </div>
        </div>
    </div>
  )
}

Day.propTypes = {
  weather: PropTypes.object.isRequired
}

module.exports = Day;
