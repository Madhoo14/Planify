import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../Main/SideBar";
import Journal from "./Journal";
import TodoList from "../Main/TodoList";
import OverallMood from "./OverallMood";
import Quotes from "./Quotes";

function DailySpread() {
  const [dailyEntry, setDailyEntry] = useState(null);
  // const [entry, setEntry] = useState(dailyEntry?.journal);
  const { dateId } = useParams();
  useEffect(() => {
    fetch(`/dailyspread/${dateId}`)
      .then((res) => res.json())
      .then((data) => {
        setDailyEntry(data.data);
        console.log(data);
      });
  }, []);
  // call api to get data for this date
  return dailyEntry ? (
    <Main>
      <SideBar />
      <TodoList todo={dailyEntry?.todo} />
      {/* <Button onClick={handleSubmit} type="submit"> */}
      {/* Save your journal entry */}
      {/* </Button> */}
      <Journal journal={dailyEntry?.journal} />
      <BottomPage>
        <OverallMood mood={dailyEntry?.overallMood} />
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

export default DailySpread;
