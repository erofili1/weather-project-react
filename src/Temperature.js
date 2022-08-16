import React, { useState } from "react";

export default function Temperature(props) {
  const [temperatureUnit, setTemperatureUnit] = useState();

  return (
    <div>
      <span className="temperature">{Math.round(props.celsius)}</span>{" "}
      <a href="/" className="celsius">
        °C |
      </a>{" "}
      <a href="/" className="fahrenheit">
        °F
      </a>
    </div>
  );
}
