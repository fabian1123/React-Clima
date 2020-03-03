import React from 'react';
import WeatherCard from './WeatherCard';
import './WeatherBar.css';

const api = "1aa519799856cb357b11f7d31be7e1eb";
const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${api}`;

let weathers = [
    {
      day: 'Lun',
      icon: 'day-sunny',
      max: 34,
      min: 22
    }
]

class WeatherBar extends React.Component {

    constructor(){
        super();
        this.state = {clima: []};
    }
    componentDidMount(){
        fetch(weatherUrl)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(datosClima => {
                this.clima = datosClima;
                this.dialogo = true;
                console.log(datosClima.list);
            })
            .finally(() => {
                this.cargandoClima = false;
            });
    }

    render(){
        //
        return(
            <div className="weather-bar">
                {this.props.weathers.map((w,i) => <WeatherCard weather={w} key={i} />)}
            </div>
        );
    }
};

export default WeatherBar;

