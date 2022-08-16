import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", ({email, password}) => {
  return axios
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

    .catch(() => alert("Usuario no existe"));
});

const userReducer = createReducer([], {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
