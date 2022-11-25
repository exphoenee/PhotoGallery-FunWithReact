import { createSlice } from "@reduxjs/toolkit";

import UsersMock from "../db/UsersMock";

export const registerUsersSlice = createSlice({
  name: "registerUsers",
  initialState: {
    value: UsersMock,
  },
  reducers: {
    register: (state, action) => {
      /* TODO: the user role and id must generated on the backend */
      const id = state.value[state.value.length - 1].id + 1;
      state.value = [...state.value, { ...action.payload, id, role: "user" }];
    },
    remove: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    update: (state, action) => {
      state.value = state.value.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    changePassword: (state, action) => {
      const password = action.payload.password;
      state.value = state.value.map((user) =>
        user.id === action.payload.id ? { ...user, password } : user
      );
    },
  },
});

export const { register, remove, update, deleteUser, changePassword } =
  registerUsersSlice.actions;

export default registerUsersSlice.reducer;
