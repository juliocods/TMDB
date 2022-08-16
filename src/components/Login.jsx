import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: res.data.name,
            id: res.data.id,
            email: res.data.email,
            lastname: res.data.lastname,
          })
        );
      })
      .then(() => navigate("/"))
      .catch(() => alert("Usuario no existe"));
      navigate("/")
  };

  return (
    <>

        <img
          src={`https://blogdesuperheroes.es/imagen-noti/bds_first-class_poster-091.jpg`}
          style={{maxWidth:1400}}
          
        />
      <div className="container p-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="staticEmail2"
                  onChange={handdleEmail}
                  value={email}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  onChange={handdlePassword}
                  value={password}
                />
              </div>
              <div class="mb-3 ">
                <Link to="/register">
                  <label class="form-check-label" for="exampleCheck1">
                    Register
                  </label>
                </Link>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
