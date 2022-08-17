import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Users from "./Users";
import searchUser from "../state/user";
import { useDispatch } from "react-redux";

const SearchUser = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
/*     dispatch(searchUser(user)) */

  };

  const handleSearch = (e) => {
    setUser(e.target.value);
  };

  return (
    <>
      {" "}
      <form className="d-flex ms-5 me-5" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search User"
          aria-label="Search"
          onChange={handleSearch}
        />
      </form>
    </>
  );
};

export default SearchUser;
