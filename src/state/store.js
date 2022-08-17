import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import searchUserReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    searchUser: searchUserReducer,
  },
});

export default store;
