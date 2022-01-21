import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FiUserCheck } from "react-icons/fi";

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
  box-shadow: 0 0 10px rgba(239, 71, 111, 0.1);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  &:hover {
    color: #ef476f;
    box-shadow: 0 0 20px rgba(239, 71, 111, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default Login;
