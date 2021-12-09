import React from "react";
import styled from "styled-components";
import GoalsList from "./GoalsList";
import Header from "../Header";
import Footer from "../Footer";
import SideBar from "../Main/SideBar";

const AnnualGoals = () => {
  return (
    <Container>
      <Header />
      <Content>
        <GoalsList />
        <SideBar />
      </Content>
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  /* background-color: var(--almost-white); */
  width: 100%;
  min-height: calc(100vh -200px);
  margin-left: auto;
  margin-right: auto;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Goals = styled.div``;
export default AnnualGoals;
