import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
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
          <div className="d-flex">
            <div>
              <WeatherIcon
                code={props.info.icon}
                alt={props.info.description}
              />
            </div>
            <div>
              <Temperature celsius={props.info.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul className="weather-stats">
            <li>Humidity: {Math.round(props.info.humidity)}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
      <Forecast data={props.info} />
    </div>
  );
}
