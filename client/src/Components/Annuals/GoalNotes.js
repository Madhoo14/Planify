import React, { useState, useContext } from "react";
import styled from "styled-components";

function GoalNotes({ notes, setNotes, handleNotes }) {
  //   const [notes, setNotes] = useState("");
  //   const handleNotes = (e) => {
  //     setNotes(e.target.value);
  //   };

  return (
    <GoalNotesWrapper>
      <Form>
        {/* <Label for="notes">you can GoalNotes here...</Label> */}
        <TextArea
          id="notes"
          name="notes"
          //   rows="16"
          //   columns="320000"
          placeholder="Write notes about your goals here..."
          value={notes}
          onChange={(e) => handleNotes(e)}
        ></TextArea>
      </Form>
    </GoalNotesWrapper>
  );
}
const Form = styled.form``;
const Label = styled.label``;
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
