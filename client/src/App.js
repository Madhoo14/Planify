import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnnualSpread from "./Components/Annuals/AnnualSpread";
import Home from "./Components/Home";
import GlobalStyles from "./Components/GlobalStyles";
import AnnualGoals from "./Components/Annuals/AnnualGoals";
const App = () => {
  return (
    // <p> This is my project</p>
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/annualspread" element={<AnnualSpread />}></Route>
          <Route path="/annualgoals" element={<AnnualGoals />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
