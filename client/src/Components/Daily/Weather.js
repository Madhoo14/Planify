import React from "react";
import styled from "styled-components";
import cloudy from "../../assets/cloudy.jpg";
import overcast from "../../assets/overcast.jpg";
import generalWeather from "../../assets/generalWeather.jpg";
import mist from "../../assets/mist.jpg";
import rainy from "../../assets/rainy.jpg";
import clearSky from "../../assets/clearSky.jpg";
import snow from "../../assets/snow.jpg";
import thunder from "../../assets/thunder.jpg";

function Weather({ weather, setWeather }) {
  let bckGrndImg = "";
  if (weather?.description.includes("cloud")) {
    bckGrndImg = cloudy;
  } else if (weather?.description.includes("thunder")) {
    bckGrndImg = thunder;
  } else if (weather?.description.includes("rain")) {
    bckGrndImg = rainy;
  } else if (weather?.description.includes("overcast")) {
    bckGrndImg = overcast;
  } else if (weather?.description.includes("snow")) {
    bckGrndImg = snow;
  } else if (weather?.description.includes("mist")) {
    bckGrndImg = mist;
  } else if (weather?.description.includes("clear")) {
    bckGrndImg = clearSky;
  } else {
    bckGrndImg = generalWeather;
  }

  return (
    <Container bckGrndImg={bckGrndImg}>
      <WeatherDetails>
        <div>City: {weather?.city}</div>
        <div>
          <span>
            <strong>Min:</strong> {Math.round(weather?.min)} °C{" "}
          </span>
          <span>
            <strong>Max:</strong> {Math.round(weather?.max)} °C
          </span>
          <div>{weather?.description}</div>
        </div>
      </WeatherDetails>
    </Container>
  );
}

const Container = styled.div`
  font-size: 20px;
  height: 100px;
  width: 25%;
  padding-left: 10px;
  margin: 0 60px;
  /* border: solid var(--coffee-brown); */
  /* background-color: var(--light-brown); */
  color: var(--almost-white);
  border-radius: 10px;
  &::before {
    content: "";
    background-image: url(${(props) => props.bckGrndImg});
    background-size: cover;
    position: absolute;
    opacity: 0.5;
    height: 120px;
    width: 25%;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const WeatherDetails = styled.div`
  z-index: 100;
  font-size: 32px;
  font-weight: 900;
`;

export default Weather;
