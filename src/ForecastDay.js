import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="forecast-day">{props.data.dt}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="Forecast-temperatures">
        <span className="temp-max">{maxTemperature()}</span>{" "}
        <span className="temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
