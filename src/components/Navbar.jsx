import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchUser from "./SearchUser";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      axios.post(`http://localhost:3001/api/users/me`, { token });
    }
  });

  const handdleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to={"/"}>
          <button type="button" className="btn btn-outline-info">
            TMDB
          </button>
        </Link>
        <SearchUser />
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <div className="collapse navbar-collapse ms-5" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>
                  <p className="nav-link text-light">
                    Movies
                  </p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/series"}>
                  <p className="nav-link text-light" >
                    Series
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <form className="d-flex" role="search">
            {user ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h5> {(user.name + " " + user.lastname).toUpperCase()}</h5>
                  </button>
                  <ul className="dropdown-menu">
                    <Link to="/favorites">
                      <button className="dropdown-item">Favorites</button>
                    </Link>
                    <Link to={"/profile"}>
                      <button className="dropdown-item">My profile</button>
                    </Link>

                    <button className="dropdown-item" onClick={handdleLogout}>
                      Logout
                    </button>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-outline-info" type="submit">
                    Login
                  </button>
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </nav>
    /*     <nav style={{ backgroundColor: "#032541", padding: 20, display:"flex" }}>
      <Link to="/">
      <h1 style={{paddingRight:1100, color:"wheat"}}>TMDB</h1>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav> */
  );
};

export default Navbar;
