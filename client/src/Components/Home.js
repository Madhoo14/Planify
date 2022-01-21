import React from "react";
import styled from "styled-components";
import SideBar from "./Main/SideBar";
import Winter from "../assets/WinterMountainWater.jpg";
import Spring from "../assets/PrettySakuraClose.jpg";
import Summer from "../assets/LavenderField.jpg";
import Fall from "../assets/FallLeaves.jpg";
import { useAuth0 } from "@auth0/auth0-react";
const moment = require("moment");

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  var date = moment().format("dddd, MMMM Do YYYY");

  // to customize background image depending on the season
  const monthNow = moment().format("MMM").toLowerCase();
  console.log(monthNow);
  let image = "";
  if (monthNow === "dec" || monthNow === "jan" || monthNow === "feb") {
    image = Winter;
  } else if (monthNow === "mar" || monthNow === "apr" || monthNow === "may") {
    image = Spring;
  } else if (monthNow === "jun" || monthNow === "jul" || monthNow === "aug") {
    image = Summer;
  } else {
    image = Fall;
  }

  return (
    <Main image={image}>
      {/* <BackgroundImage image={image} /> */}
      <Items>
        <SideBar />
      </Items>
      <TimeSpace>
        {date} <center>Welcome {isAuthenticated ? user.name : null}</center>
      </TimeSpace>

      <AnotherItem>
        <AnotherWrapper>
          <h1>
            <center>
              Eat that Frog! <i>-Mark Twain</i>
            </center>
          </h1>
          <Para>
            As Mark Twain once said “If it’s your job to eat a frog, it’s best
            to do it first thing in the morning. And if it’s your job to eat two
            frogs, it’s best to eat the biggest one first.”
            <p>
              In order to get an overview of your tasks and similarly to the
              Eisenhower Box technique, you can divide your to-do list in 4
              categories:{" "}
              <ol>
                <li>* Things you don’t want to do, but actually need to do.</li>
                <li>* Things you want to do and actually need to do.</li>
                <li>* Things you want to do, but actually don’t need to do.</li>
                <li>
                  * Things you don’t want to do, and actually don’t need to do.{" "}
                </li>
              </ol>
              <br></br>
              The frog represents the "Things" you don’t want to do, but
              actually need to do.<br></br>
              <h1>
                <center>
                  Eat <strong> that </strong>Frog
                </center>
              </h1>
              <cite>
                <center>
                  https://blog.noisli.com/what-it-means-to-eat-the-frog/
                </center>
              </cite>
            </p>
          </Para>
        </AnotherWrapper>
      </AnotherItem>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-size: cover;
  /* opacity: 0.5; */
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
    opacity: 0.5;
  }
`;

const Para = styled.p`
  font-size: 23px;
  font-family: var(--font-family);
`;

const TimeSpace = styled.div`
  z-index: 100;
  position: absolute;
  top: 600px;
  left: 600px;
  align-items: center;
  font-size: 100px;
  text-shadow: 2px 2px 8px var(--light-brown);
  font-weight: bold;
  color: var(--almost-white);
`;

const BackgroundImage = styled.div`
  margin: 0px;
  background-image: url(${(props) => props.image});
  min-height: 100vh;
  background-size: cover;
  position: relative;
  opacity: 0.5;
`;

const Items = styled.div`
  position: absolute;
  background-color: rgb(121, 128, 138, 0.7);
  top: 200px;
  left: 200px;
  width: 600px;
  padding: 50px;
  border-radius: 10px;
`;

const AnotherItem = styled.div`
  position: absolute;
  background-color: rgb(121, 128, 138, 0.7);
  top: 950px;
  left: calc(100% - 2500px);
  /* width: 1250px; */
  height: 500px;
  padding: 50px;
  border-radius: 10px;
`;

const AnotherWrapper = styled.div`
  height: 400px;
  /* width: 1150px; */
  background-color: rgb(183, 183, 164, 0.7);
  border-radius: 10px;
`;

export default Home;
