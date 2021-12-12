import React, { useState, useContext } from "react";
import styled from "styled-components";
import { PlanifyContext } from "../PlanifyContext";

function Journal({ entry, setEntry, handleEntry }) {
  // const { entry, setEntry, handleEntry } = useContext(PlanifyContext);
  // const [entry, setEntry] = useState(journal);
  // const handleEntry = (e) => {
  //   setEntry(e.target.value);
  // };

  return (
    <JournalWrapper>
      <Form>
        {/* <Label for="journal">you can journal here...</Label> */}
        <TextArea
          id="journal"
          name="journal"
          rows="16"
          columns="320000"
          placeholder="you can journal about your day here..."
          value={entry}
          onChange={(e) => handleEntry(e)}
        ></TextArea>
      </Form>
    </JournalWrapper>
  );
}
const Form = styled.form``;
const Label = styled.label``;
const TextArea = styled.textarea`
  width: 50%;
  height: 600px;
  font-size: 32px;
  outline: none;
  margin-top: 25px;
  border: solid 2px var(--graceful-grey);
  background-color: rgb(70, 63, 58, 0.2);
  border-radius: 10px;
`;
const JournalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;
export default Journal;
