import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu/NavMenu";
import Search from "./NavMenu/Search";

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <NavMenu />
      </Left>
      <Right>
        <Search />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  background: rgba(188, 184, 177);
  position: sticky;
  color: #463f3a;
  font-family: Var(--font-family);
  padding: 5px 50px;

  top: 0;
  z-index: 50;
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default Header;
