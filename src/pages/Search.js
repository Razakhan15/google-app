import { Mic } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../components/StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch({
      type: actionTypes.SET_SERCH_TERM,
      term: input
    })
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Felling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button className="search_buttonsHidden" type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">I'm Felling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
