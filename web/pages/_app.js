import '../styles/globals.css';
import {useEffect, useLayoutEffect, useState} from 'react';

import '@elastic/eui/dist/eui_theme_light.css';
import {EuiProvider} from '@elastic/eui';

import store from '../store';
import {Provider} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

import {syncTheme} from '../store/slices/theme';
import {themeSelector} from '../store/selectors';
import useThemeDetector from '../hooks/useThemeDetector';

function MyApp({Component, pageProps}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? (
    <Provider store={store}>
      <MyAppWithRedux Component={Component} pageProps={pageProps} />
    </Provider>
  ) : null;
}

function MyAppWithRedux({Component, pageProps}) {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector); // redux theme
  const system = useThemeDetector();

  useLayoutEffect(() => {
    dispatch(syncTheme());
    return () => {};
  }, []);

  useEffect(() => {
    console.table({theme, system});
  });

  return (
    <EuiProvider colorMode={theme}>
      <Component {...pageProps} />
    </EuiProvider>
  );
}

export default MyApp;
