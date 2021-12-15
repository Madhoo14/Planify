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
  height: 180px;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  flex-grow: 0.05;
  font-family: "Happy Monkey";
  /* background-color: rgb(70, 63, 58, 0.2); // this is the color */
  background-color: rgb(183, 183, 164, 0.4);
  border-radius: 10px;
  margin-top: 10px;
  /* position: fixed; */
  top: 100px;
  right: 0;
`;
const SideBarNav = styled(Link)`
  color: var(--coffee-brown);
  margin-left: 15px;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  &:hover {
    color: #ef476f;
  }
`;
export default SideBar;
