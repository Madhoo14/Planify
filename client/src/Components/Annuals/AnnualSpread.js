import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import Calendar from "rc-year-calendar";
import Header from "../Header";
import Footer from "../Footer";
import "./AnnualSpread.css";
import SideBar from "../Main/SideBar";
// import MoodTracker from "../Daily/MoodTracker";

const moment = require("moment");

const AnnualSpread = () => {
  const [dateId, setDateId] = useState(null);
  const navigate = useNavigate();
  // const [momentDate, setMomentDate] = useState(null);

  const clicker = (date, event) => {
    // a fetch will go here to fetch the annual page corresponding to that date. If a mongodb entry exists it will bring on that page if not it will
    //bring up an empty page for daily spread

    console.log(date.date);
    let temp = moment(date.date).format("DDMMMYYYY");
    setDateId(temp);
    console.log(temp);
    fetch(`/dailyspread/${temp}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          navigate("/errorpage");
        } else {
          navigate(`/dailyspread/${temp}`);
          console.log(data);
        }
      });
  };

  return (
    <>
      <CalendarContainer>
        <CalendarPart>
          <Calendar
            value={dateId}
            onDayClick={(date, event) => clicker(date, event)}
          />
        </CalendarPart>
        <SideBar />
      </CalendarContainer>
      {/* <MoodTracker /> */}
    </>
  );
};
const CalendarContainer = styled.div`
  min-height: 800px;
  width: 70%;
  margin-top: 100px;
  /* background-color: rgba(224, 175, 160, 0.2); */
  color: var(--coffee-brown);
  margin: auto;
  padding: 50px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  /* flex-direction: column; */
`;
const CalendarPart = styled.div`
  margin-top: 100px;
`;
export default AnnualSpread;
