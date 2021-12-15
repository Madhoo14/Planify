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
    <Container>
      <div>City: {weather?.city}</div>
      <div>
        <span>
          <strong>Min:</strong> {weather?.min} °C{" "}
        </span>
        <span>
          <strong>Max:</strong> {weather?.max} °C
        </span>
        <div>{weather?.description}</div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  font-size: 20px;
  height: 80px;
  width: 20%;
  padding-left: 10px;
  border: solid var(--coffee-brown);
  background-color: var(--coffee-brown);
  color: var(--graceful-grey);
  border-radius: 10px;
`;
export default Weather;
