import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to={"/"}>
          <button type="button" className="btn btn-outline-info">
            TMDB
          </button>
        </Link>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search">
            <Link to="/register">
              <p className="text-light me-4 mt-2">REGISTER?</p>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline-info" type="submit">
                Login
              </button>
            </Link>
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
