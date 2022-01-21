import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavMenu = () => {
  return (
    <Wrapper>
      <NavigationMenu to="/">Home</NavigationMenu>

      <NavigationMenu to="/about">How to Planify</NavigationMenu>
    </Wrapper>
  );
};

const NavigationMenu = styled(NavLink)`
  color: #616060;
  margin-left: 15px;
  text-decoration: none;
  font-size: 25px;
  font-family: "Happy Monkey";
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

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default NavMenu;
