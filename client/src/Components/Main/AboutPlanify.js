import React from "react";
import styled from "styled-components";
const AboutPlanify = () => {
  return (
    <Container>
      <Words>
        <Para>
          Planify is based on the concept of Bullet Journaling also called as
          BuJo in the Bullet Journaling world. It is a proven fact that goals
          that are written down somewhere and goals that a have an action plan
          are the goals that are realized. This app helps you with identifying
          SMART goals and break up your goals into smaller chunks and plan your
          day so that you move towards your goal on a daily basis. I highly
          encourage you to not clutter your Todo list with too many items.
          Always delegate what you can and don't add things that do not take
          your forward towards your goal. Respect the Todo list.
        </Para>
        <h1>How to Planify:</h1>
        <UnorderedList>
          <List>
            😊 From the Home page click on the Annual Spread link. All clickable
            links turn pink when you hover over.
          </List>
          <List>
            😊 You choose the year from the top bar of the calendar and then
            click on any date you want to go to.
          </List>
          <List>
            😊 Clicking on a date in the calendar will take you to the Daily
            Spread page for that date. You can journal abut your day and you can
            track your overall mood for the day. Planify your day away.
          </List>
          <List>
            😊 Click on the Annual Goals page and pick a year to start setting
            your goals for the year. You can write notes about the goals in the
            Notes section.There are great tips available on how to set S.M.A.R.T
            goals.
          </List>
          <List>
            😊 Click on the Monthly Spread and click on the name of the month in
            the monthly calendar to set monthly goals.
          </List>
          <List>
            😊 Most important of all revisit your goals frequently and track
            your progress. Good luck.
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
`;
const UnorderedList = styled.ul`
  color: var(--coffee-brown);
`;
const List = styled.li`
  font-size: 28px;
  margin-left: 50px;
`;
const Words = styled.div`
  /* margin-left: 50px;
  padding-left: 50px; */
`;
const Para = styled.p`
  font-size: 28px;
  color: var(--coffee-brown);
`;
export default AboutPlanify;
