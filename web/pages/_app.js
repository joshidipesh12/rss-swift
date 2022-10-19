import '../styles/globals.css';
import '@elastic/eui/dist/eui_theme_light.css';

import {Provider} from 'react-redux';
import {ThemeProvider} from 'next-themes';

import store from '../store';
import PageProvider from '../components/PageProvider';

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PageProvider>
          <Component {...pageProps} />
        </PageProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
