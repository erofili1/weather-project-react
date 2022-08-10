import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const apiKey = `7654bb3646824703bcfdf4ced8409f03`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Wednesday 15:00",
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>

        <div className="WeatherInfo">
          <div className="row">
            <div className="col">
              <ul className="city-weather">
                <li>
                  <span className="city-name">{weatherData.city}</span>
                </li>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-6 weather-block">
              <img
                className="weather-icon"
                src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt={weatherData.description}
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="celsius">°C</span>
            </div>

            <div className="col-6">
              <ul className="weather-stats">
                <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);

    return "Weather Information Loading...";
  }
}
