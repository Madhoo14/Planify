import React from "react";
import styled from "styled-components";
import Planner from "../../assets/Planning.jpg";
const AboutPlanify = () => {
  return (
    <Container image={Planner}>
      <Words>
        <Para>
          Planify is based on the concept of Bullet Journaling, also called as,
          BuJo in the Bullet Journaling world. It is a proven fact that goals
          that are written down and goals that a have an action plan are the
          goals that are realized. This app helps you identify SMART goals,
          break them into smaller chunks and plan your day so that you move
          towards your goal on a daily basis. I highly encourage you to not
          clutter your Todo list with too many items. Always delegate what you
          can and don't add things that do not take your forward towards your
          goal. Respect the Todo list.
        </Para>
        <h1>How to Planify:</h1>
        <UnorderedList>
          <List>
            😊 On the Home page, click on the Annual Spread link. All clickable
            links turn pink when you hover over.
          </List>
          <List>
            😊 In the Annual Spread page, choose the year from the top bar of
            the calendar and then click on any date you want to go to.
          </List>
          <List>
            😊 Clicking on a date in the calendar will take you to the Daily
            Spread page for that date. You can journal about your day, add to
            Todo list and track your overall mood for the day. Planify your day
            away.
          </List>
          <List>
            😊 Click on the Annual Goals page and pick a year to start setting
            your goals for the year. You can write notes about the goals in the
            Notes section.There is also a guide on the page on how to set
            S.M.A.R.T goals.
          </List>
          <List>
            😊 Click on the Monthly Spread and click on the name of the month in
            the monthly calendar to start setting monthly goals.
          </List>
          <List>
            😊 Most important of all, revisit your goals frequently and track
            your progress.
          </List>
          <h1>
            <center>😊 Happy Planifying!! 😊</center>
          </h1>
        </UnorderedList>
      </Words>
    </Container>
  );
};

const Container = styled.div`
  margin: 100px;
  background-color: var(--bckgrnd-clr);
  height: 100%;
  width: 100%;
  &::before {
    content: "";
    background-image: url(${(props) => props.image});
    background-size: cover;
    position: absolute;
    height: 110vh;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;
  }
`;

const UnorderedList = styled.ul`
  color: var(--coffee-brown);
`;

const List = styled.li`
  font-size: 28px;
  margin-left: 50px;
`;

const Words = styled.div`
  position: absolute;
  top: 350px;
  left: 1800px;
  height: 1000px;
  width: 1100px;
  background-color: var(--graceful-grey);
`;

const Para = styled.p`
  font-size: 28px;
  color: var(--coffee-brown);
`;

export default AboutPlanify;
