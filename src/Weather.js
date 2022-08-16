import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const apiKey = `7654bb3646824703bcfdf4ced8409f03`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <SearchForm />

        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);

    return "Weather Information Loading...";
  }
}
