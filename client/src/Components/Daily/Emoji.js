import React from "react";
import styled from "styled-components";

function Emoji({ mood, setMood, handleClickedElement, labels }) {
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
            style={{ opacity: mood === labels[0] ? "1" : "0.5" }}
          >
            😁
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="sad"
            title="not so good"
            role="img"
            name="sad"
            style={{ opacity: mood === labels[1] ? "1" : "0.5" }}
          >
            🙁
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="unwell"
            title="unwell"
            role="img"
            name="unwell"
            style={{ opacity: mood === labels[2] ? "1" : "0.5" }}
          >
            🤕
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="neutral"
            title="neutral"
            role="img"
            name="neutral"
            style={{ opacity: mood === labels[3] ? "1" : "0.5" }}
          >
            😐
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="satisfied"
            title="pleased"
            role="img"
            name="satisfied"
            style={{ opacity: mood === labels[4] ? "1" : "0.5" }}
          >
            😌
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="frustrated"
            title="frustrated"
            role="img"
            name="frustrated"
            style={{ opacity: mood === labels[5] ? "1" : "0.5" }}
          >
            😩
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="bored face"
            title="meh"
            role="img"
            name="bored"
            style={{ opacity: mood === labels[6] ? "1" : "0.5" }}
          >
            😶
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="angry red face"
            title="mad"
            name="angry"
            role="img"
            style={{ opacity: mood === labels[7] ? "1" : "0.5" }}
          >
            😡
          </Button>
          <Button
            onClick={(e) => handleClickedElement(e)}
            aria-label="productive cool face with sun glasses"
            title="productive"
            role="img"
            name="productive"
            style={{ opacity: mood === labels[8] ? "1" : "0.5" }}
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
  height: auto;
  border-radius: 10px;
  background-color: var(--bckgrnd-clr);
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1810px) {
    height: auto;
  }
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
  justify-content: center;
`;

const Heading = styled.div`
  font-family: var(--font-family);
  font-size: 36px;
  text-align: center;
  color: var(--coffee-brown);
`;

const Emojis = styled.div`
  display: flex;
  @media (max-width: 1810px) {
    display: inline-grid;
    grid-template-columns: auto auto auto;
  }
`;

export default Emoji;
