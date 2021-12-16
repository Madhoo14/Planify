import React, { useState } from "react";
import { useNavigate } from "react-router";
//icons
import { BsSearch } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

import styled from "styled-components";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // console.log for now. need and end point and a fetch later for it
  const handleKeyDown = (eve) => {
    if (eve.key === "Enter") {
      navigate(`/searchResult/${searchTerm}`);
    }
  };

  const handleSubmit = () => {
    navigate(`/searchResult/${searchTerm}`);
  };

  const handleClearClick = () => {
    setSearchTerm("");
  };

  return (
    <SearchWrapper>
      <ButtonSearch onClick={handleSubmit}>
        <BsSearch />
      </ButtonSearch>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={(ev) => handleKeyDown(ev)}
        placeholder="start typing to search..."
        aria-label="search for entries matching your term"
      ></Input>
      <ButtonClear onClick={handleClearClick}>
        <RiCloseFill />
      </ButtonClear>
    </SearchWrapper>
  );
};
const ButtonSearch = styled.button`
  height: 80px;
  width: 40px;
  background: none;
  border: 1px solid white;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: #616060;
  font-size: 30px;
  font-weight: 700;
  font-family: "Happy Monkey";
  border-right: none;
  background: rgba(188, 184, 177, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  margin: 15px 0;
  padding: 1px 2px;
  &:hover {
    color: #ef476f;
  }
`;
const ButtonClear = styled.button`
  height: 80px;
  width: 40px;
  background: none;
  border: 1px solid white;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: #616060;
  font-size: 30px;
  font-weight: 700;
  font-family: "Happy Monkey";
  /* border-right: none; */
  background: rgba(188, 184, 177, 0.3);
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  padding: 1px 2px;
  &:hover {
    color: #ef476f;
  }
`;
const Input = styled.input`
  height: 80px;
  width: 380px;
  font-size: 28px;
  color: #616060;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  background: rgba(188, 184, 177, 0.3);
  border: solid 1px white;
  outline: none;
  border-left: none;
  border-right: none;
  padding: 1px 2px;
  margin: 15px 0;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: none;
  border: none;
  padding-right: 100px;
  font-family: "Happy Monkey";
`;
export default Search;
