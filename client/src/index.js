import React from "react";
import ReactDOM from "react-dom";
// google font through webfont loader
// import WebFont from "webfontloader";
import { PlanifyContext } from "./Components/PlanifyContext";

import App from "./App";
// WebFont.load({
//   google: {
//     families: ["Happy Monkey Web:300,400,700", "sans-serif"],
//   },
// });
const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
