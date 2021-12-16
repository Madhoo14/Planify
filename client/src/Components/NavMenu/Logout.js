import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Button role="img" title="Log Out" onClick={() => logout()}>
        <FiLogOut />
      </Button>
    )
  );
};

const Button = styled.button`
  width: 100px;
  height: 80px;
  border-radius: 10px;
  font-size: 32px;
  border: solid 1px var(--almost-white);
  color: #616060;
  margin: 15px;
  cursor: pointer;
  background: rgba(188, 184, 177, 0.3);
  &:hover {
    color: #ef476f;
  }
`;

export default Logout;
