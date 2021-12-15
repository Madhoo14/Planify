import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FiUserCheck } from "react-icons/fi";
// require("react-dom");
// window.React2 = require("react");
// console.log(window.React1 === window.React2);
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <Button
        role="img"
        title="Log in/Sign up"
        onClick={() => loginWithRedirect()}
      >
        <FiUserCheck />
      </Button>
    )
  );
};
const Button = styled.button`
  width: 100px;
  height: 80px;
  border-radius: 10px;
  font-size: 40px;
  border: solid 1px var(--almost-white);
  color: #616060;
  margin: 15px;
  background: rgba(188, 184, 177, 0.3);
  cursor: pointer;
  &:hover {
    color: #ef476f;
  }
`;
export default Login;
