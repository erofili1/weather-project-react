import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  function convertToFahrenheit(event) {
    event.preventDefault();
  }

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <ul className="city-weather">
            <li>
              <span className="city-name">{props.info.city}</span>
            </li>
            <li>
              <FormattedDate date={props.info.date} />
            </li>
            <li className="text-capitalize">{props.info.description}</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-6 weather-block">
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${props.info.icon}@2x.png`}
            alt={props.info.description}
          />

          <Temperature celsius={props.info.temperature} />
        </div>

        <div className="col-6">
          <ul className="weather-stats">
            <li>Humidity: {Math.round(props.info.humidity)}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
