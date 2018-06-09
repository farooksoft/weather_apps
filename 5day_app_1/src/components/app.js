import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header text-center">
          <h1>Weather Forecast</h1>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
