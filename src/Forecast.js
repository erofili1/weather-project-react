import "./Forecast.css";
import "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div>
            <WeatherIcon code="01d" />
          </div>
          <div>
            <span className="temp-min">26°</span>{" "}
            <span className="temp-max">32°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
