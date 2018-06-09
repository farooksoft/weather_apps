var React = require('react');
var GetWeatherContainer = require('../containers/GetWeatherContainer');

var styles = {
  container: {
    marginRight: '15px'
  },
  nav: {
    backgroundColor: 'rgba(252, 90, 44, 0.89)'
  },
  title: {
    fontSize: '30px',
    color: 'white'
  }
}

function Header (props) {
  return (
    <div>
      <nav className="navbar navbar-default" style={styles.nav}>
        <div className="container-fluid">
          <div className="navbar-header">
            <h2 className="navbar-brand" style={styles.title}>
              Weather tomorrow?
            </h2>
          </div>
          <div className="nav navbar-nav navbar-right" style={styles.container}>
            <GetWeatherContainer direction="row" />
          </div>
        </div>
      </nav>
    </div>
  )
}

module.exports = Header;
