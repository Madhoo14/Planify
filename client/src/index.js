import React from "react";
import ReactDOM from "react-dom";

// import { PlanifyContext } from "./Components/PlanifyContext";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

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
