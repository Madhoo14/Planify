import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <Logo>Planify</Logo>
      <QuoteSpace>
        A goal without a plan is just a wish! / Tout objectif sans plan n'est
        qu'un souhait!
        <Span>- Antoine de Saint-Exupéry</Span>
      </QuoteSpace>
    </Wrapper>
  );
};
// QuoteSpace is the place for an api for inspirational quote.
const QuoteSpace = styled.p`
  width: 64%;
  height: 100%;
  font-size: 32px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const Span = styled.span`
  font-size: 28px;
  opacity: 0.8;
  font-style: italic;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const Wrapper = styled.footer`
  height: 100px;
  width: 100vw;
  background: rgba(188, 184, 177);
  position: sticky;
  left: 0;
  bottom: 0;
  right: 0;
  color: #463f3a;
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 700;
  font-size: 30px;
  margin-top: auto;
`;
const Logo = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export default Footer;
