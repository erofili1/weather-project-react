import { useState } from "react";
import "./Forecast.css";
import axios from "axios";
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
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Thu</div>
            <div>
              <WeatherIcon code="01d" />
            </div>
            <div className="Forecast-temperatures">
              <span className="temp-max">
                {Math.round(forecast[0].temp.max)}°
              </span>{" "}
              <span className="temp-min">
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
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
