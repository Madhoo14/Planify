import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import errorpage from "../assets/errorImage.jpeg";

function ErrorPage() {
  return (
    <Wrapper>
      <H1>Uh Oh !</H1>
      <Image src={errorpage} alt={"Error"} />
      <H2>Page not found</H2>
      <Paragraph>
        Please refresh the page or click <LinkHome to={"/"}>here</LinkHome> to
        return home.
      </Paragraph>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 90px;
  height: 800px;
  background-color: var(--graceful-grey);
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  background-color: var(--graceful-grey);
  height: 600px;
  width: 400px;
  opacity: 0.7;
`;

const H1 = styled.h1`
  padding-bottom: 15px;
  width: 200px;
  font-size: 50px;
  text-decoration: underline;
  color: var(--coffee-brown);
`;

const H2 = styled.div`
  font-weight: 600;
  font-size: 36px;
  width: 300px;
  color: var(--coffee-brown);
`;

const Paragraph = styled.p`
  padding-top: 10px;
  font-size: 36px;
  color: var(--coffee-brown);
`;

const LinkHome = styled(NavLink)`
  font-weight: 700;
`;

export default ErrorPage;
