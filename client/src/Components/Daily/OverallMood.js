import React from "react";
import Emoji from "./Emoji";
import styled from "styled-components";

const OverallMood = ({ mood, setMood, handleClickedElement, labels }) => {
  return (
    <EmojiContainer>
      <Emoji
        mood={mood}
        setMood={setMood}
        handleClickedElement={handleClickedElement}
        labels={labels}
      />
    </EmojiContainer>
  );
};
const EmojiContainer = styled.div``;
export default OverallMood;
