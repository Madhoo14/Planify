import React from "react";
import ReactDOM from "react-dom";

// import { PlanifyContext } from "./Components/PlanifyContext";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const domain = "dev-81n5f7im.us.auth0.com";
// const clientId = "WrYXgJo57MDSkIrngU85tGp9uJFqouHW";

// const rootElement = document.getElementById("root");
ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={"http://localhost:3000"}
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
