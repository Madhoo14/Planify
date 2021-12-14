import React, { useState } from "react";
import styled from "styled-components";

const PickYear = ({ goalYear, setGoalYear, handleYearChange, years }) => {
  return (
    <Wrapper>
      <label for="year">Choose a year</label>
      <select onChange={(e) => handleYearChange(e)}>
        {years.map((year, index) => (
          <option value={year} key={index} required>
            {year}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 6px;

  /* label {
    display: none;
  } */

  select {
    background: #fff;
    border: 1px solid #e4e8eb;
    border-radius: 3px;
    color: #433c71;
    font-size: 15px;
    font-weight: 600;
    height: 40px;
    padding: 0 8px;
    width: 100%;
  }
`;

export default PickYear;
