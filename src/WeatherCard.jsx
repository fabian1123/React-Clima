import React from 'react';
import './WeatherCard.css';

function WeatherCard(props){
    return(
        <div className="weather-card">
            <div className="day">
                {props.weather.day}
            </div>
            <div className="icon">
                <img src={`${props.weather.icon}`}></img>
            </div>
            <div>
                <span className="max">{props.weather.max}°</span>
                <span className="min">{props.weather.min}°</span>
            </div>
        </div>
    );
}

export default WeatherCard;