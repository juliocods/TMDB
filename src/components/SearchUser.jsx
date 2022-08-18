import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SearchUser = () => {
  const [inputUser, setImputUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/users/${inputUser}`)
      .then((res) => console.log(res.data));
    navigate("/users");
  };

  const handleSearch = (e) => {
    setImputUser(e.target.value);
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
