import { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    console.log(forecast[0].weather[0].icon);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let forecastApiKey = `7654bb3646824703bcfdf4ced8409f03`;

    let lat = props.data.lat;
    let lon = props.data.lon;

    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${forecastApiKey}&units=metric`;

    axios.get(forecastApiUrl).then(handleResponse);
    return null;
  }
}
