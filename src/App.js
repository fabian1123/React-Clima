import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherBar from './WeatherBar';

function App() {

  let weathers = [
    {
      day: 'Lun',
      icon: 'day-sunny',
      max: 34,
      min: 22
    },
    {
      day: 'Mar',
      icon: 'day-cloudy',
      max: 32,
      min: 20
    },
    {
      day: 'Mie',
      icon: 'day-sleet',
      max: 33,
      min: 19
    },
    {
      day: 'Jue',
      icon: 'rain',
      max: 28,
      min: 17
    },
    {
      day: 'Vie',
      icon: 'day-sunny-overcast',
      max: 30,
      min: 18
    },
    {
      day: 'Sab',
      icon: 'snow',
      max: 42,
      min: 3
    }
  ];

  return (
    <div className="App">
        <h1>Clima</h1><br></br>
        <WeatherBar weathers={weathers} />
    </div>
  );
}

export default App;
