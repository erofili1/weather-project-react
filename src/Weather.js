import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let apiKey = `7654bb3646824703bcfdf4ced8409f03`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}&units=metric`;
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
            />
          </div>
          <div className="col-4">
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-4">
            <ul className="city-weather">
              <li>
                <span className="city-name">Chania</span>
              </li>
              <li>Wednesday 15:00</li>
              <li>Sunny</li>
            </ul>
          </div>
          <div className="col-2">
            <img
              className="weather-icon"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
          </div>
          <div className="col-2">
            <span className="temperature">31</span>{" "}
            <span className="celsius">°C</span>
          </div>
          <div className="col-4">
            <ul className="weather-stats">
              <li>Percipitation: 0%</li>
              <li>Humidity: 44%</li>
              <li>Wind: 5 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
