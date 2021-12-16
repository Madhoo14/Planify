import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import SearchShow from "./SearchShow";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { searchTerm } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/searchterm?searchTerm=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          navigate("/errorpage");
        } else {
          setSearchResults(data.data);
          console.log(data.data);
        }
      });
  }, [searchTerm]);

  return searchResults
    ? searchResults.map((result) => (
        <div>
          <SearchShow date={result._id} journalEntry={result.journal} />
        </div>
      ))
    : null;
};

export default SearchResults;
