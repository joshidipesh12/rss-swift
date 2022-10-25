import '../styles/globals.css';
import '@elastic/eui/dist/eui_theme_light.css';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';

import store from '../store';
import PageProvider from '../components/PageProvider';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || React.Fragment;

  return (
    <Provider store={store}>
      <ThemeProvider>
        <PageProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
