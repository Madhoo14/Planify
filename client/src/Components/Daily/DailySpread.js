import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../Main/SideBar";
import Journal from "./Journal";
import TodoList from "../Main/TodoList";
import OverallMood from "./OverallMood";
import Quotes from "./Quotes";
import Gratitude from "./Gratitude";

function DailySpread() {
  const [dailyEntry, setDailyEntry] = useState(null);
  // const [entry, setEntry] = useState(dailyEntry?.journal);
  // call api to get data for this date
  const { dateId } = useParams();
  useEffect(() => {
    fetch(`/dailyspread/${dateId}`)
      .then((res) => res.json())
      .then((data) => {
        setDailyEntry(data.data);
        console.log(data);
      });
  }, []);
  const handleEntrySubmit = () => {
    // api to post to the dailyspread page with the date
    console.log(dailyEntry._id);
  };
  return dailyEntry ? (
    <Main>
      <TopPage>
        <DateDiv>{dailyEntry?._id}</DateDiv>
        <Button onClick={handleEntrySubmit} type="submit">
          Save your entry for today
        </Button>
      </TopPage>
      <MidPage>
        <TodoList style={{ flexGrow: "1" }} todo={dailyEntry?.todo} />

        <Journal style={{ flexGrow: "2" }} journal={dailyEntry?.journal} />
        <SideBar style={{ flexGrow: "1" }} />
      </MidPage>
      <BottomPage>
        <OverallMood mood={dailyEntry?.overallMood} />
        <Gratitude gratitude={dailyEntry?.gratitude} />
        <Quotes quote={dailyEntry?.quote} />
      </BottomPage>
    </Main>
  ) : null;
}

const Main = styled.main`
  /* width: 100vw;
      min-height: calc(100vh - 200px); */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
`;
const BottomPage = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  height: 80px;
  width: 50%;
  margin: auto;

  border-radius: 20px;
  background-color: var(--coffee-brown);
  font-size: 32px;
  color: var(--graceful-grey);
  font-weight: bold;
  cursor: pointer;
`;
const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  /* border: solid green; */
  justify-content: space-between;
`;
const DateDiv = styled.div`
  height: 80px;
  width: 25%;
  border-radius: 10px;
  border: solid var(--coffee-brown);
  background-color: var(--coffee-brown);
  color: var(--graceful-grey);
  font-weight: bold;
  font-size: 32px;
  text-align: center;
`;
const MidPage = styled.div`
  display: flex;
  flex-direction: row;
  /* border: solid maroon; */
  justify-content: space-between;
`;
export default DailySpread;
