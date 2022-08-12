import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    axios.post("http://localhost:3001/api/users/register", {
      name,
      lastname,
      email,
      password,
    });
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");

    alert("Registrado con éxito");
  };

  return (
    <>
      <form class="row g-4  pt-5 pb-3  bg-secondary  bg-opacity-50" onSubmit={handleSubmit}>
      <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            onChange={handdleName}
            value={name}
          />
        </div>
      <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            onChange={handdleLastName}
            value={lastname}
          />
        </div>
      <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            onChange={handdleEmail}
            value={email}
          />
        </div>

        <div class="col-auto">
          <label for="inputPassword2" class="visually-hidden">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="Password"
            onChange={handdlePassword}
            value={password}
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Register
          </button>

        </div>
      </form>
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
