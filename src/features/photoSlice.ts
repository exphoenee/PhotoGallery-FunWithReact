import { createSlice } from "@reduxjs/toolkit";

/* Types and interfacs */
import PhotoType from "../types/PhotoType";

/* Mocks */
import PhotosMock from "../db/PhotosMock";

/* TODO: it would be better to take apart the comments from the post */
export const photoSlice = createSlice({
  name: "photos",
  initialState: {
    value: PhotosMock as PhotoType[],
  },
  reducers: {
    addPhoto: (state, action) => {
      state.value.push(action.payload);
    },
    updatePhoto: (state, action) => {},
    removePhoto: (state, action) => {},
  },
});

export const { addPhoto, removePhoto, updatePhoto } = photoSlice.actions;

export default photoSlice.reducer;
