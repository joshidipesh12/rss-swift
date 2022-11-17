import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'post',
  initialState: {
    postClicked: null,
  },
  reducers: {
    setPostClicked: (state, action) => {
      return { postClicked: action.payload };
    },
  },
});

export const { setPostClicked } = slice.actions;
export default slice.reducer;
