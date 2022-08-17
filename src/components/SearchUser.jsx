import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Users from "./Users";

const SearchUser = () => {
  const navigate = useNavigate();
 
  const [user, setUser] = useState([]); 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .get(`http://localhost:3001/api/users/${inputUser}`)
    .then((res) => setUser(res.data))
    setUser(" ");
    navigate("/users");
  };
  

  const [inputUser, setInputUser] = useState("");
  const handleSearch = (e) => {
    setInputUser(e.target.value);
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
          value={inputUser}
        />
      </form>
{      <Users users={user} />}
    </>
  );
};

export default SearchUser;
