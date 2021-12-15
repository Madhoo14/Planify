import React from "react";
import Login from "./NavMenu/Login";
import styled from "styled-components";
import SideBar from "./Main/SideBar";
import Winter from "../assets/WinterMountainWater.jpg";
import Spring from "../assets/PrettySakuraClose.jpg";
import Summer from "../assets/LavenderField.jpg";
import Fall from "../assets/FallLeaves.jpg";
const moment = require("moment");

const Home = () => {
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
    <Main>
      <BackgroundImage image={image} />
      <Items>
        <SideBar />
      </Items>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
`;

const BackgroundImage = styled.div`
  margin: 0px;
  background-image: url(${(props) => props.image});
  min-height: 100vh;
  background-size: cover;
  position: relative;
  opacity: 0.5;
`;
// const theme = `{

//     "BackgroundImage": {
//       "Winter": {
//         "background-image":"url(${Winter})"
//        },
//        "Spring": {
//         "background-image":"url(${Spring})"
//        },
//        "Summer": {
//         "background-image":"url(${Summer})"
//        },
//        "Fall": {
//         "background-image":"url(${Fall})"
//        },
//       }
// BackgroundImage.propTypes = {
//   image: React.PropTypes.oneOf(["Winter", "Spring", "Summer", "Fall"]),
// }
// `;
const Items = styled.div`
  position: absolute;
  background-color: rgb(121, 128, 138, 0.7);
  top: 200px;
  left: 200px;
  width: 600px;
  padding: 50px;
  border-radius: 10px;
`;
export default Home;
