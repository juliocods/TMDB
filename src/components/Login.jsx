import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handdleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handdlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //USERS
    axios
      .post("http://localhost:3001/api/users/login", { email, password })
      .then((res) => console.log(res.data));
    setPassword("");
    setEmail("");

  };

  return (
    <>
      <form
        className="row g-5  pt-5 pb-3 bg-secondary  bg-opacity-50"
        onSubmit={handleSubmit}
      >
        <div className="col-auto">
          <label  className="visually-hidden">
            Email
          </label>
          <input
            type="text"
    
            className="form-control"
            id="staticEmail2"
            placeholder="email"
            onChange={handdleEmail}
            value={email}
          />
        </div>
        <div className="col-auto">
          <label  className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
            onChange={handdlePassword}
            value={password}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
