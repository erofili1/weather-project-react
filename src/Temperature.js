import { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="celsius">°C |</span>{" "}
        <a href="/" className="fahrenheit" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{fahrenheit()}</span>{" "}
        <a href="/" className="celsius" onClick={showCelsius}>
          °C |
        </a>{" "}
        <span className="fahrenheit">°F</span>
      </div>
    );
  }
}
