import {useEffect, useLayoutEffect, useState} from 'react';

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const mqListener = (_, e) => {
    setIsDarkTheme(e.matches);
  };

  useLayoutEffect(() => {
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    return () => {};
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
