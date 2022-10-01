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

  function day() {
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return weekdays[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
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
