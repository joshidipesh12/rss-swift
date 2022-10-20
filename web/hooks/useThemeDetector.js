import {useEffect, useState} from 'react';

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const themeFn = e => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', themeFn);
    return () => darkThemeMq.removeEventListener('change', themeFn);
  }, []);
  return isDarkTheme ? 'dark' : 'light';
};

export default useThemeDetector;
