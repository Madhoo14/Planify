import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnnualSpread from "./Components/Annuals/AnnualSpread";
import Home from "./Components/Home";
import GlobalStyles from "./Components/GlobalStyles";
import AnnualGoals from "./Components/Annuals/AnnualGoals";
import MonthlySpread from "./Components/MonthlySpread";
import DailySpread from "./Components/Daily/DailySpread";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import styled from "styled-components";
import ErrorPage from "./Components/ErrorPage";
const App = () => {
  return (
    // <p> This is my project</p>
    <BrowserRouter>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/annualspread" element={<AnnualSpread />}></Route>
          <Route path="/annualgoals" element={<AnnualGoals />}></Route>
          <Route path="/monthlyspread" element={<MonthlySpread />}></Route>
          <Route path="/dailyspread/:dateId" element={<DailySpread />}></Route>
          <Route path="/errorpage" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: solid red;
`;
export default App;
