import { createSlice } from "@reduxjs/toolkit";
import { apiCallRequested } from "../api";

const slice = createSlice({
  name: "top_feeds",
  initialState: {
    loading: false,
    posts: null,
    category: null,
  },
  reducers: {
    topFeedsRequested: (state, action) => {
      state.loading = true;
    },
    topFeedsSuccess: (state, action) => {
      state.posts = action.payload.response.items;
      state.category = action.payload.response.category;
      state.loading = false;
    },
    topFeedsFailure: (state, action) => {
      state.loading = false;
    },
  },
});

export const { topFeedsRequested, topFeedsSuccess, topFeedsFailure } =
  slice.actions;
export default slice.reducer;

export const getTopFeeds = () => async dispatch => {
  return dispatch(
    apiCallRequested({
      url: `/api/top_feeds`,
      method: "get",
      onStart: topFeedsRequested.type,
      onSuccess: topFeedsSuccess.type,
      onError: topFeedsFailure.type,
    }),
  );
};
