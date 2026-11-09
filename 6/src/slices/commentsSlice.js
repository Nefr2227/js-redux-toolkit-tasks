// src/slices/commentsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, { payload }) {
      const { entities, ids } = payload;
      state.entities = entities;
      state.ids = ids;
    },
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;