import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  return (
    <div>
      <div className="forecast-day">{props.data.dt}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="Forecast-temperatures">
        <span className="temp-max">{Math.round(props.data.temp.max)}°</span>{" "}
        <span className="temp-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
