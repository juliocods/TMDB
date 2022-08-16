import React from "react";
import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handdleName = (e) => {
    setName(e.target.value);
  };
  const handdleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handdleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handdlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/register", {
        name,
        lastname,
        email,
        password,
      })

      .then(() => navigate("/"))
      .catch(() => alert("Usuario no existe"));
  };

  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col pt-5">
          <h1 className="mb-5">Register</h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={handdleName}
                value={name}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={handdleLastName}
                value={lastname}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={handdleEmail}
                value={email}
              />
            </div>

            <div className="col-auto">
              <label className="visually-hidden">Password</label>
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
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </>
    /*     <div style={{backgroundColor:"gray", textAlign:"center",paddingTop:20, paddingBottom:40}}>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="nombre" onChange={handdleName} value={name} />
        <input
          placeholder="apellido"
          onChange={handdleLastName}
          value={lastname}
        />
        <input placeholder="email" onChange={handdleEmail} value={email} />
        <input
          placeholder="contraseña"
          onChange={handdlePassword}
          value={password}
        />
        <button>Registrar</button>
        
      </form>
    </div> */
  );
};

export default Register;
