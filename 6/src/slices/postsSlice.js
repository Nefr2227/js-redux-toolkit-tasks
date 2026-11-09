// src/slices/postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      const { entities, ids } = payload;
      state.entities = entities;
      state.ids = ids;
    },
  },
});

export const { actions } = postsSlice;
export default postsSlice.reducer;