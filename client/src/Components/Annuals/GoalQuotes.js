import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

function GoalQuotes() {
  const [goalQuote, setGoalQuote] = useState("");
  let num = Math.floor(Math.random() * 1643);
  useEffect(() => {
    if (goalQuote == "") {
      fetch("https://type.fit/api/quotes")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setGoalQuote(data[num]);
        });
    }
  }, []);

  return (
    <QuoteContainer>
      <DailyQuote>
        <Para> Quotable quotes</Para>
        {goalQuote?.text}
        <Author> - {goalQuote?.author ? goalQuote.author : "Unknown"}</Author>
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
  height: 300px;
  width: 45vw;
  margin: auto;
  border-radius: 12px;
  background-color: rgb(70, 63, 58, 0.2);
  margin-top: 25px;
  margin-bottom: 25px;
  color: var(--coffee-brown);
`;

const Para = styled.p`
  font-size: 36px;
  text-shadow: rgb(107, 112, 92);
  color: #6b705c;
`;

export default GoalQuotes;
