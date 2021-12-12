import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarNav to="/annualspread">Annual Spread</SideBarNav>
      <SideBarNav to="/annualgoals">Annual Goals</SideBarNav>
      <SideBarNav to="/monthlyspread">Monthly Spread</SideBarNav>
      <SideBarNav to="/dailyspread">Daily Spread</SideBarNav>
    </SideBarContainer>
  );
};
const SideBarContainer = styled.div`
  height: 200px;
  width: 16vw;
  display: flex;
  flex-direction: column;
  flex-grow: 0.05;
  font-family: "Happy Monkey";
  background-color: rgb(70, 63, 58, 0.2); // this is the color
  border-radius: 10px;
  margin-top: 50px;
  position: fixed;
  top: 100px;
  right: 0;
`;
const SideBarNav = styled(NavLink)`
  color: #616060;
  margin-left: 15px;
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
  &:hover {
    color: #e0afa0;
  }
`;
export default SideBar;
