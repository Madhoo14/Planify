import React from "react";
import { useState } from "react";
import Picker from "emoji-picker-react";
// decide later if you wnat to use it in the project
//for now I am going to comment out the component
//where it is currently being called - AnnualSpread
function MoodTracker() {
  const [mood, setMood] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setMood(emojiObject);
  };

  return (
    <div>
      {mood ? (
        <span>You chose: {mood.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
}

export default MoodTracker;
