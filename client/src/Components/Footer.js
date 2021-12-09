import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <Logo>Planify</Logo>
      <QuoteSpace></QuoteSpace>
    </Wrapper>
  );
};
// QuoteSpace is the place for an api for inspirational quote.
const QuoteSpace = styled.div`
  width: 64%;
  height: 100%;
`;
const Wrapper = styled.footer`
  height: 100px;
  width: 100vw;
  background: rgba(188, 184, 177, 0.3);
  position: sticky;
  left: 0;
  bottom: 0;
  right: 0;
  color: #463f3a;
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
  font-family: "Happy Monkey";
  font-weight: 700;
  font-size: 30px;
  margin-top: auto;
`;
const Logo = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export default Footer;
