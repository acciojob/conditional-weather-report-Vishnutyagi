
import './../styles/App.css';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    // Simulating an API call with a static weather input
    const weatherInput = { temperature: 25, conditions: 'Sunny' };
    setWeather(weatherInput);
  }, []);

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;

