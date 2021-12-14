import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const Logout = () => {
  const { logout } = useAuth0();
  return <Button onClick={() => logout()}>Log Out</Button>;
};
const Button = styled.button`
  width: 200px;
  height: 50px;
`;

export default Logout;
