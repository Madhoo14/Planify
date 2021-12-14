import React from "react";
import Login from "./NavMenu/Login";
import styled from "styled-components";
import SideBar from "./Main/SideBar";

const Home = () => {
  return (
    <Main>
      <SideBar />
    </Main>
  );
};
const HomeWrapper = styled.div`
  /* min-height: 100vh; */
  /* position: absolute; */
`;
const HomeFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  /* height: calc(100vh - 100px); */
  /* display: block; */
`;

const Main = styled.main`
  /* width: 100vw;
  min-height: calc(100vh - 200px); */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
`;

export default Home;
