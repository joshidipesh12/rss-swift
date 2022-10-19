import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'sample',
  initialState: {
    sample: null,
  },
  reducers: {
    sample: (state, action) => {
    },
  },
});

export const {sample} = slice.actions;
export default slice.reducer;
