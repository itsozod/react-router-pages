import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [],
  loader: false,
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
};

export const usersListSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    setUsersData: (state, { payload }) => {
      state.usersList = payload;
    },
    setLoader: (state, { payload }) => {
      state.loader = payload;
    },
    setFavourites: (state, { payload }) => {
      state.favourites.push(payload);
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    deleteFavourites: (state, { payload }) => {
      state.favourites = state.favourites.filter((item) => item.id !== payload);
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});
export const { setUsersData, setLoader, setFavourites, deleteFavourites } =
  usersListSlice.actions;

export const getUsersListData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader(true));
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      dispatch(setLoader(false));
      dispatch(setUsersData(data));
    } catch (e) {
      dispatch(setLoader(false));
      console.error(e.message);
    }
  };
};
