import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import SideBar from "./Main/SideBar";
import Journal from "./Daily/Journal";

import TodoList from "./Main/TodoList";
import OverallMood from "./Daily/OverallMood";
const Home = () => {
  return (
    <Main>
      {/* <Main> */}
      <SideBar />
      <TodoList />
      {/* </Main> */}
      {/* <HomeFooter> */}
      <Journal />
      <OverallMood />

      {/* </HomeFooter> */}
      {/* // </HomeWrapper> */}
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
