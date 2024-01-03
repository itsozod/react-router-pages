import { configureStore } from "@reduxjs/toolkit";
import { usersListSlice } from "./features/usersList/usersListSlice";
export const store = configureStore({
  reducer: {
    usersList: usersListSlice.reducer,
  },
});
