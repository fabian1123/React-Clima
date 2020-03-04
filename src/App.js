import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherBar from './WeatherBar';
import WeatherBarApi from './WeatherBarApi';

function App() {

  return (
    <div className="App">
        <h1>Clima</h1><br></br>
        <WeatherBar />
    </div>
  );
}

export default App;
