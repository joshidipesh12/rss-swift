import {createSelector} from '@reduxjs/toolkit';

export const themeSelector = createSelector(
  state => state.theme,
  theme => (theme.isDarkMode ? 'DARK' : 'LIGHT'),
);
