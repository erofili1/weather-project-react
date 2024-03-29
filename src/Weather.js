import { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherError from "./WeatherError";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(undefined);
  const [city, setCity] = useState(props.defaultCity);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    console.log("Weather Data: ", city, weatherData);
  }, [weatherData, city]);

  useEffect(() => {
    search();
  }, []);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function handleError(error) {
    setError(error.message);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    setError(undefined);
    const apiKey = `7654bb3646824703bcfdf4ced8409f03`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  if (!weatherData) {
    return "Loading data...";
  }

  return (
    <div className="Weather">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              onChange={handleCityChange}
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

      {error && <WeatherError error={error} />}

      {/* If not error, run WeatherInfo component */}
      {!error && <WeatherInfo info={weatherData} />}
    </div>
  );
}
