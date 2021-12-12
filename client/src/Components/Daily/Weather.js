import { requirePropFactory } from "@material-ui/core";
import React from "react";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { PlanifyContext } from "../PlanifyContext";
// import {.env} from "../.env"
//
function Weather({ weather, setWeather }) {
  // const [weather, setWeather] = useState(null);
  // //   const key = process.env.REACT_APP_WEATHER_API_KEY;
  // //   console.log(process.env.REACT_APP_WEATHER_API_KEY);
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=waterloo&units=metric&appid=3dcd094d337af270bbe00edaf33ad547`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setWeather(data);
  //     });
  // }, []);
  // const { weather, setWeather } = useContext(PlanifyContext);
  return (
    <div>
      <div>City: {weather?.city}</div>
      <div>
        <span>Min: {weather?.min} °C </span>
        <span>Max: {weather?.max} °C</span>
        <div>{weather?.description}</div>
      </div>
    </div>
  );
}

export default Weather;
