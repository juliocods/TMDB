import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchUser = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //USERS

    navigate("/users");
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
        />
      </form>
      
    </>
  );
};

export default SearchUser;
