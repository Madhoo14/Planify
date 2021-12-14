import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FiUserCheck } from "react-icons/fi";
// require("react-dom");
// window.React2 = require("react");
// console.log(window.React1 === window.React2);
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button onClick={() => loginWithRedirect()}>
      <FiUserCheck />
    </Button>
  );
};
const Button = styled.button`
  width: 200px;
  height: 50px;
`;
export default Login;
