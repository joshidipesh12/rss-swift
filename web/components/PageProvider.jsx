import {EuiProvider} from '@elastic/eui';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import useSystemTheme from '../hooks/useThemeDetector';

const PageProvider = ({children}) => {
  const {resolvedTheme} = useTheme();
  const systemTheme = useSystemTheme();
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    if (resolvedTheme === 'dark' || resolvedTheme === 'light')
      setCurrentTheme(resolvedTheme);
    else setCurrentTheme(systemTheme);
  }, [resolvedTheme]);

  return <EuiProvider colorMode={currentTheme}>{children}</EuiProvider>;
};
export default PageProvider;
