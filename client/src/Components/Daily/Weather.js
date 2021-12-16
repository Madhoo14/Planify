import React from "react";
import styled from "styled-components";

function Weather({ weather, setWeather }) {
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
  margin: 0 10px;
  border: solid var(--coffee-brown);
  background-color: var(--light-brown);
  color: var(--almost-white);
  border-radius: 10px;
`;

export default Weather;
