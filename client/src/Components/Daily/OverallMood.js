import React from "react";
import Emoji from "./Emoji";
import styled from "styled-components";

function OverallMood({ mood }) {
  return (
    <EmojiContainer>
      <Emoji mood={mood} />
    </EmojiContainer>
  );
}
const EmojiContainer = styled.div``;
export default OverallMood;
