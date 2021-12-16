import React from "react";
import styled from "styled-components";

function GoalNotes({ notes, setNotes, handleNotes }) {
  return (
    <GoalNotesWrapper>
      <Form>
        <TextArea
          id="notes"
          name="notes"
          placeholder="Write notes about your goals here..."
          value={notes}
          onChange={(e) => handleNotes(e)}
        ></TextArea>
      </Form>
    </GoalNotesWrapper>
  );
}
const Form = styled.form``;

const TextArea = styled.textarea`
  width: 45vw;
  height: 300px;
  font-size: 32px;
  outline: none;
  margin-top: 25px;
  border: solid 2px var(--graceful-grey);
  background-color: rgb(70, 63, 58, 0.2);
  border-radius: 10px;
`;

const GoalNotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export default GoalNotes;
