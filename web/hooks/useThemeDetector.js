import {useEffect, useLayoutEffect, useState} from 'react';

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const themeFn = e => {
    setIsDarkTheme(e.matches);
  };

  useLayoutEffect(() => {
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    return () => {};
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', themeFn);
    return () => darkThemeMq.removeEventListener('change', themeFn);
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
