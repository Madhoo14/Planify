import React from "react";
import styled from "styled-components";

function Quotes({ quote, setQuote }) {
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
