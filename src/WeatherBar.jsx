import React from 'react';
import WeatherCard from './WeatherCard';
import './WeatherBar.css';
import {cargarClima} from './Api';

class WeatherBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
      }

      componentDidMount() {
        cargarClima().then(data => {
          this.setState({
            data: data
          });
        });
      }

    render() {
        //
        return (
            <div className="weather-bar">
                {this.state.data && this.state.data.map((datos, index) => <WeatherCard key={index} weather={datos} />)}
            </div>
        );
    }
};

export default WeatherBar;

