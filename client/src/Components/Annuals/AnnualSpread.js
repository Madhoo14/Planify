import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Calendar from "rc-year-calendar";
import "./AnnualSpread.css";
import SideBar from "../Main/SideBar";

const moment = require("moment");

const AnnualSpread = () => {
  const [dateId, setDateId] = useState(null);
  const navigate = useNavigate();

  const clicker = (date, event) => {
    //  to fetch the annual page corresponding to that date. If a mongodb entry exists it will bring on that page if not it will
    // create and render an empty page for that date's daily spread

    console.log(date.date);
    let temp = moment(date.date).format("DDMMMYYYY");
    setDateId(temp);

    fetch(`/dailyspread/${temp}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          console.log("this isnt working");
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
          <Para>Click on any date to go to the Daily Spread for the date</Para>
          <Calendar
            value={dateId}
            onDayClick={(date, event) => clicker(date, event)}
          />
        </CalendarPart>
        <SidebarPart>
          <SideBar />
        </SidebarPart>
      </CalendarContainer>
    </>
  );
};

const CalendarContainer = styled.div`
  min-height: 800px;
  margin-top: 100px;
  color: var(--coffee-brown);
  padding: 50px;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
`;
const CalendarPart = styled.div`
  margin-top: 10px;
  margin-left: 100px;
  width: 80%;
`;
const SidebarPart = styled.div`
  width: 18%;
`;
const Para = styled.p`
  font-size: 32px;
  color: var(--coffee-brown);
  margin-bottom: 5px;
`;

export default AnnualSpread;
