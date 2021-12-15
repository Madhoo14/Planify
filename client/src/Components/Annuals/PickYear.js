import React, { useState } from "react";
import styled from "styled-components";

const PickYear = ({ goalYear, setGoalYear, handleYearChange, years }) => {
  return (
    <Wrapper>
      <Label htmlfor="year">Choose a year to set or view goals </Label>
      <Select onChange={(e) => handleYearChange(e)}>
        {years.map((year, index) => (
          <option value={year} key={index} required>
            {year}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 6px;
  background-color: var(--light-brown);
  border-radius: 20px;
  margin-right: 15px;
`;
const Label = styled.label`
  font-size: 25px;
  height: 40px;
  color: var(--almost-white);
  text-align: center;
  padding-top: 20px;
`;

const Select = styled.select`
  border: 1px solid var(--graceful-grey);
  background-color: var(--light-brown);
  border-radius: 10px;
  color: var(--almost-white);
  font-size: 25px;
  font-weight: 600;
  height: 40px;
  padding: 0 8px;
  margin-right: 10px;
  text-align: center;
  /* padding-top: 20px; */
  outline: none;
  &:option:active {
    outline-color: var(--graceful-grey) !important;
  }
  &:option:checked {
    outline-color: var(--graceful-grey) !important;
  }
`;

export default PickYear;
