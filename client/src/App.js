import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnnualSpread from "./Components/Annuals/AnnualSpread";
import Home from "./Components/Home";
import GlobalStyles from "./Components/GlobalStyles";
import AnnualGoals from "./Components/Annuals/AnnualGoals";
import MonthlySpread from "./Components/Monthly/MonthlySpread";
import DailySpread from "./Components/Daily/DailySpread";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import styled from "styled-components";
import ErrorPage from "./Components/ErrorPage";
import SearchResults from "./Components/Main/SearchResults";
import AboutPlanify from "./Components/Main/AboutPlanify";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPlanify />}></Route>
          <Route path="/annualspread" element={<AnnualSpread />}></Route>
          <Route path="/annualgoals/:year" element={<AnnualGoals />}></Route>
          <Route
            path="/monthlyspread/:month"
            element={<MonthlySpread />}
          ></Route>
          <Route path="/dailyspread/:dateId" element={<DailySpread />}></Route>
          <Route
            path="/searchResult/:searchTerm"
            element={<SearchResults />}
          ></Route>
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
`;
export default App;
