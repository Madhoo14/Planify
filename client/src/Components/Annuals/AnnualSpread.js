import React, { useState } from "react";
// import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import styled from "styled-components";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import Calendar from "rc-year-calendar";
import Header from "../Header";
import Footer from "../Footer";
import "./AnnualSpread.css";
import SideBar from "../Main/SideBar";
import MoodTracker from "../Daily/MoodTracker";

const AnnualSpread = () => {
  const [date, setDate] = useState(null);
  const clicker = (date, event) => {
    // a fetch will go here to fetch the an annual page corresponding to that date. If a mongodb entry exists it will bring on that page if not it will
    //bring up an empty page for daily spread
    console.log(date.date);
    setDate(date);
  };
  return (
    <>
      <Header />
      <CalendarContainer>
        <CalendarPart>
          <Calendar
            value={date}
            onDayClick={(date, event) => clicker(date, event)}
          />
        </CalendarPart>
        <SideBar />
      </CalendarContainer>
      <MoodTracker />
      <Footer />
    </>
  );
  console.log(date);
};
const CalendarContainer = styled.div`
  min-height: 800px;
  width: 64%;
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
