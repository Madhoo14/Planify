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
  &:hover {
    color: #ef476f;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default NavMenu;
