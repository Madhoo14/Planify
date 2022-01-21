import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const moment = require("moment");

const SideBar = () => {
  const todayDate = moment().format("DDMMMYYYY");
  const thisYear = moment().format("YYYY");
  const thisMonth = moment().format("MMMYYYY");

  return (
    <SideBarContainer>
      <SideBarNav to={"/annualspread"}>Annual Spread</SideBarNav>
      <SideBarNav to={`/annualgoals/${thisYear}`}>Annual Goals</SideBarNav>
      <SideBarNav to={`/monthlyspread/${thisMonth}`}>Monthly Spread</SideBarNav>
      <SideBarNav to={`/dailyspread/${todayDate}`}>Daily Spread</SideBarNav>
    </SideBarContainer>
  );
};
const SideBarContainer = styled.div`
  height: auto;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  flex-grow: 0.05;
  font-family: "Happy Monkey";
  background-color: rgb(183, 183, 164, 0.4);
  border-radius: 10px;
  margin-top: 10px;
  top: 100px;
  right: 0;
`;

const SideBarNav = styled(Link)`
  color: var(--coffee-brown);
  margin: 15px;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(239, 71, 111, 0.1);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  &:hover {
    color: #ef476f;
    box-shadow: 0 0 20px rgba(239, 71, 111, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  /* &:hover {
    color: #ef476f;
  } */
`;

export default SideBar;
