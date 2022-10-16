import {createSlice} from '@reduxjs/toolkit';

// dummy slice
const slice = createSlice({
  name: 'dummy',
  initialState: {
    test: [],
  },
  reducers: {
    test_action: (state, action) => {
      state.test = [];
    },
  },
});

export const {test_action} = slice.actions;
export default slice.reducer;
