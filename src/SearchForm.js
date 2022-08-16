import React, { useState } from "react";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.city);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You have selected ${city}.`);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            className="form-control"
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-3">
          <input
            className="btn btn-primary w-100"
            type="submit"
            value="Search"
          />
        </div>
      </div>
    </form>
  );

  return <div>{form}</div>;
}
