import React from "react";
import styled from "styled-components";

function Emoji() {
  return (
    <div>
      <EmojiContainer>
        <Heading>Overall mood for the day</Heading>
        <Button aria-label="great" role="img">
          😁
        </Button>
        <Button aria-label="sad" role="img">
          🙁
        </Button>
        <Button aria-label="unwell" role="img">
          🤕
        </Button>
        <Button aria-label="neutral" role="img">
          😐
        </Button>
        <Button aria-label="satisfied" role="img">
          😌
        </Button>
        <Button aria-label="frustrated" role="img">
          😩
        </Button>
        <Button aria-label="bored" role="img">
          😶
        </Button>
        <Button aria-label="angry" role="img">
          😡
        </Button>
        <Button aria-label="angry" role="img">
          😎
        </Button>
      </EmojiContainer>
    </div>
  );
}
const EmojiContainer = styled.div`
  font-family: var(--font-family);
  border: solid 2px var(--graceful-grey);
  width: 900px;
  border-radius: 10px;
  background: rgba(188, 184, 177, 0.3);
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
`;
export default Emoji;
