import React from "react";
import styled from "styled-components";

function Gratitude({ gratitude, setGratitude, handleGratitude }) {
  return (
    <GratitudeWrapper>
      <Form>
        <TextArea
          id="gratitude"
          name="gratitude"
          placeholder="what are you grateful for today?"
          value={gratitude}
          onChange={(e) => handleGratitude(e)}
        ></TextArea>
      </Form>
    </GratitudeWrapper>
  );
}

const TextArea = styled.textarea`
  min-width: 45vw;
  height: 200px;
  font-size: 32px;
  outline: none;
  margin-top: 25px;
  border: solid 2px var(--graceful-grey);
  background-color: var(--bckgrnd-clr);
  border-radius: 10px;
`;

const GratitudeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const Form = styled.form``;

export default Gratitude;
