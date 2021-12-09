import React from "react";
import { useState } from "react";
import Picker from "emoji-picker-react";

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
