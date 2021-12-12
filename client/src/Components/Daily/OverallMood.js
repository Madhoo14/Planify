import React from "react";
import Emoji from "./Emoji";
import styled from "styled-components";

const OverallMood = ({
  mood,
  setMood,
  handleGreat,
  handleSad,
  handleFrustrated,
  handleAngry,
  handleBored,
  handleNeutral,
  handleSatisfied,
  handleUnwell,
  handleProductive,
  labels,
}) => {
  return (
    <EmojiContainer>
      <Emoji
        mood={mood}
        setMood={setMood}
        handleGreat={handleGreat}
        handleSad={handleSad}
        handleFrustrated={handleFrustrated}
        handleAngry={handleAngry}
        handleBored={handleBored}
        handleNeutral={handleNeutral}
        handleSatisfied={handleSatisfied}
        handleUnwell={handleUnwell}
        handleProductive={handleProductive}
        labels={labels}
      />
    </EmojiContainer>
  );
};
const EmojiContainer = styled.div``;
export default OverallMood;
