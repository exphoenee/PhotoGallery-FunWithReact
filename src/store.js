import { configureStore } from "@reduxjs/toolkit";

/* features */
import { loginUserSlice } from "./features/loginUserSlice";
import { registerUsersSlice } from "./features/registerUsersSlice";
import { postSlice } from "./features/postSlice";
import { photoSlice } from "./features/photoSlice";

export default configureStore({
  reducer: {
    login: loginUserSlice.reducer,
    users: registerUsersSlice.reducer,
    posts: postSlice.reducer,
    photos: photoSlice.reducer,
  },
});
