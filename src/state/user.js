import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const searchUser = createAsyncThunk("SEARCH_USER", ({name}) => {
  return axios
    .get(`http://localhost:3001/api/users/${name}`)
    .then((res) => res.data);
});

const searchUserReducer = createReducer([], {
  [searchUser.fulfilled]: (state, action) => action.payload,
});

export default searchUserReducer;
