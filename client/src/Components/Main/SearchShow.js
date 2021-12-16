import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchShow = ({ date, journalEntry }) => {
  return (
    <Container>
      <Date>
        <Link to={`/dailyspread/${date}`}>{date}</Link>
      </Date>
      <JournalEntry>
        {journalEntry.length > 150
          ? journalEntry.substring(0, 150) + "..."
          : journalEntry}
      </JournalEntry>
    </Container>
  );
};

const Container = styled.div`
  max-height: 600px;
  width: 50%;
  background-color: var(--bckgrnd-clr);
  padding: 5px;
  margin: auto;
  margin-top: 25px;
  border-radius: 15px;
`;

const Date = styled.div`
  font-size: 30px;
  color: var(--coffee-brown);
  background-color: var(--bkgrnd-clr);
  margin-bottom: 10px;
`;

const JournalEntry = styled.div`
  font-size: 32px;
  color: var(--coffee-brown);
  background-color: var(--bkgrnd-clr);
  margin: 10px 0;
`;

export default SearchShow;
