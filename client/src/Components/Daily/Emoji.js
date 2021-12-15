import React, { useState, useContext } from "react";
import { PlanifyContext } from "../PlanifyContext";
import styled from "styled-components";

function Emoji({ mood, setMood, handleClickedElement, labels }) {
  //   const [isGreat, setIsGreat] = useState(false);
  //   const [isSad, setIsSad] = useState(false);
  //   const [isUnwell, setIsUnwell] = useState(false);
  //   const [isNeutral, setIsNeutral] = useState(false);
  //   const [isSatisfied, setIsSatisfied] = useState(false);
  //   const [isFrustrated, setIsFrustrated] = useState(false);
  //   const [isBored, setIsBored] = useState(false);
  //   const [isAngry, setIsAngry] = useState(false);
  //   const [isProductive, setIsProductive] = useState(false);
  //creating an array to store the mood for the day
  // const [mood, setMood] = useState({
  //   isGreat: false,
  //   isSad: false,
  //   isUnwell: false,
  //   isNeutral: false,
  //   isSatisfied: false,
  //   isFrustrated: false,
  //   isBored: false,
  //   isAngry: false,
  //   isProductive: false,
  // });
  // const {
  //   mood,
  //   setMood,
  //   labels,
  //   handleGreat,
  //   handleSad,
  //   handleUnwell,
  //   handleNeutral,
  //   handleSatisfied,
  //   handleFrustrated,
  //   handleBored,
  //   handleAngry,
  //   handleProductive,
  // } = useContext(PlanifyContext);
  // const [mood, setMood] = useState(props.mood);
  // const labels = [
  //   "great",
  //   "sad",
  //   "unwell",
  //   "neutral",
  //   "satisfied",
  //   "frustrated",
  //   "bored",
  //   "angry",
  //   "productive",
  // ];
  // console.log(mood);
  // // functions for Button onClick for different buttons

  // const handleGreat = () => {
  //   setMood(labels[0]);
  // };
  // const handleSad = () => {
  //   setMood(labels[1]);
  // };
  // const handleUnwell = () => {
  //   setMood(labels[2]);
  // };
  // const handleNeutral = () => {
  //   setMood(labels[3]);
  // };
  // const handleSatisfied = () => {
  //   setMood(labels[4]);
  // };
  // const handleFrustrated = () => {
  //   setMood(labels[5]);
  // };
  // const handleBored = () => {
  //   setMood(labels[6]);
  // };
  // const handleAngry = () => {
  //   setMood(labels[7]);
  // };
  // const handleProductive = () => {
  //   setMood(labels[8]);
  // };
  return (
    <div>
      <EmojiContainer>
        <Heading>Overall mood for the day</Heading>
        <Emojis>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="great"
            title="great"
            role="img"
            name="great"
            style={{ opacity: mood === labels[0] ? "1" : "0.6" }}
          >
            😁
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="sad"
            title="not so good"
            role="img"
            name="sad"
            style={{ opacity: mood === labels[1] ? "1" : "0.6" }}
          >
            🙁
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="unwell"
            title="unwell"
            role="img"
            name="unwell"
            style={{ opacity: mood === labels[2] ? "1" : "0.6" }}
          >
            🤕
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="neutral"
            title="neutral"
            role="img"
            name="neutral"
            style={{ opacity: mood === labels[3] ? "1" : "0.6" }}
          >
            😐
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="satisfied"
            title="pleased"
            role="img"
            name="satisfied"
            style={{ opacity: mood === labels[4] ? "1" : "0.6" }}
          >
            😌
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="frustrated"
            title="frustrated"
            role="img"
            name="frustrated"
            style={{ opacity: mood === labels[6] ? "1" : "0.6" }}
          >
            😩
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="bored face"
            title="meh"
            role="img"
            name="bored"
            style={{ opacity: mood === labels[6] ? "1" : "0.6" }}
          >
            😶
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="angry red face"
            title="mad"
            name="angry"
            role="img"
            style={{ opacity: mood === labels[7] ? "1" : "0.6" }}
          >
            😡
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="productive cool face with sun glasses"
            title="productive"
            role="img"
            name="productive"
            style={{ opacity: mood === labels[8] ? "1" : "0.6" }}
          >
            😎
          </Button>
        </Emojis>
      </EmojiContainer>
    </div>
  );
}
const EmojiContainer = styled.div`
  font-family: var(--font-family);
  border: solid 2px var(--graceful-grey);
  width: 45vw;
  height: 200px;
  border-radius: 10px;
  background-color: var(--bckgrnd-clr);
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background: none;
  border: none;
  height: 75px;
  width: 75px;
  font-size: 60px;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  align-items: center;
`;
const Heading = styled.div`
  font-family: var(--font-family);
  font-size: 36px;
  text-align: center;
  color: var(--coffee-brown);
`;
const Emojis = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
`;
export default Emoji;
