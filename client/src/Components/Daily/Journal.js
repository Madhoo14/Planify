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
        <JournalSection>
          <Label for="journal">you can journal here...</Label>
          <TextArea
            id="journal"
            name="journal"
            // rows="16"
            // columns="320000"
            placeholder="journal about your day here..."
            value={entry}
            onChange={(e) => handleEntry(e)}
          ></TextArea>
        </JournalSection>
      </Form>
    </JournalWrapper>
  );
}
const Form = styled.form``;
const Label = styled.label`
  font-size: 25px;
  color: var(--coffee-brown);
  background-color: var(--bckgrnd-clr);
  height: 50.67px;
  border-radius: 10px;
`;
const JournalSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  width: 800px;
  height: 400px;
  font-size: 32px;
  outline: none;
  /* margin-top: 25px; */
  border: solid 2px var(--graceful-grey);
  background-color: var(--bckgrnd-clr);
  border-radius: 10px;
`;
const JournalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 50px; */
`;
export default Journal;
