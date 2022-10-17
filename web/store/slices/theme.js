import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      const toggle = !state.isDarkMode;
      state.isDarkMode = action.payload ?? toggle;
      localStorage.setItem('darkMode', `${action.payload ?? toggle}`);
    },
    syncTheme: (state, action) => {
      state.isDarkMode = !!JSON.parse(localStorage.getItem('darkMode'));
    },
  },
});

export const {setDarkMode, syncTheme} = slice.actions;
export default slice.reducer;
