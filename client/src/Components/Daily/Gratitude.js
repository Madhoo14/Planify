import React, { useState } from "react";
import styled from "styled-components";

function Gratitude() {
  const [gratitude, setGratitude] = useState("");

  const handleGratitude = (e) => {
    setGratitude(e.target.value);
  };

  return (
    <GratitudeWrapper>
      <Form>
        <TextArea
          id="gratitude"
          name="gratitude"
          rows="4"
          columns="32000"
          placeholder="what are you grateful for today?"
          value={gratitude}
          onChange={(e) => handleGratitude(e)}
        ></TextArea>
      </Form>
    </GratitudeWrapper>
  );
}
const TextArea = styled.textarea`
  width: 75%;
  height: 600px;
  font-size: 32px;
  outline: none;
  margin-top: 25px;
  border: solid 2px var(--graceful-grey);
  background-color: rgb(70, 63, 58, 0.2);
  border-radius: 10px;
`;
const GratitudeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;
const Form = styled.form``;
export default Gratitude;
