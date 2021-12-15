import React from "react";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { PlanifyContext } from "../PlanifyContext";

function Quotes({ quote, setQuote }) {
  // const [quote, setQuote] = useState(props.quote);
  // let num = Math.floor(Math.random() * 1643);
  // useEffect(() => {
  //   if (quote == "") {
  //     fetch("https://type.fit/api/quotes")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data[num]);
  //         setQuote(data[num]);
  //       });
  //   }
  // }, []);
  // const { quote, setQuote } = useContext(PlanifyContext);
  return (
    <QuoteContainer>
      <DailyQuote>
        <Para> Quotable quotes</Para>
        {quote?.text}
        <Author> - {quote?.author}</Author>
      </DailyQuote>
    </QuoteContainer>
  );
}
const DailyQuote = styled.div`
  font-size: 32px;
  /* background-color: var(--bckgrnd-clr); */
`;
const Author = styled.div`
  font-size: 32px;
  float: right;
  margin-right: 100px;
`;
const QuoteContainer = styled.div`
  height: 200px;
  width: 45vw;
  margin: auto;
  border-radius: 12px;
  background-color: var(--bckgrnd-clr);
  margin-top: 25px;
  margin-bottom: 25px;
  color: var(--coffee-brown);
`;
const Para = styled.p`
  font-size: 36px;
  text-shadow: rgb(107, 112, 92);
  color: #6b705c;
`;
export default Quotes;
