import { createSlice } from "@reduxjs/toolkit";

/* Types and interfacs */
import UserType from "../types/UserType";

export const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: {
    value: {} as UserType,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      /* TODO: this is a jwt token, it comes from backend, and must be saved in the local storage */
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.value = {} as UserType;
      /* TODO: this is a jwt token, it comes from backend, and must be saved in the local storage */
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = loginUserSlice.actions;

export default loginUserSlice.reducer;
