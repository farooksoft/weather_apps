var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  button: {
    margin: 10
  }
};

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function Button (props) {
  return (
    <button type="submit"
      className="btn btn-success "
      style={styles.button}
      onClick={props.onSubmitLocation}>
      {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input type="text"
      onChange={props.onUpdateLocation}
      className="form-control"
      placeholder={props.location}
      value={props.location} />
  )
}

function GetWeather (props) {
  return (
    <div style={getStyles(props)}>
        <InputField
          onUpdateLocation={props.onUpdateLocation}
          location={props.location}/>
        <Button
          onSubmitLocation={props.onSubmitLocation}>
          Get Weather
        </Button>
    </div>
  )
}

GetWeather.propTypes = {
  location: PropTypes.string.isRequired,
  direction: PropTypes.string,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
}

module.exports = GetWeather;
