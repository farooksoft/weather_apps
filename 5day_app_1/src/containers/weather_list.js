import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';


class WeatherList extends Component {
  renderWeather(data) {
    const cityName = data.city.name;
    const temps = data.list.map(weather => ((weather.main.temp - 273) * 1.8) + 32);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const {lon, lat} = data.city.coord;
    
      return (
        <tr key={cityName}>
          <td><GoogleMap lat={lat} lon={lon} /></td>
          <td><Chart units="F" color="green" data={temps} /></td>
          <td><Chart units="hPa" color="blue" data={pressures} /></td>
          <td><Chart units="%" color="red" data={humidities} /></td>
        </tr>
      );
  }
  
  render() {
    return (
      <table className="table table-hover weather-averages">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);