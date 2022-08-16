import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
      </div>
      <footer>
        This project was coded by Erofili Pateraki and is{" "}
        <a
          href="https://github.com/erofili1/weather-project-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub.
      </footer>
    </div>
  );
}
