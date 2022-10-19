import '../styles/globals.css';
import '@elastic/eui/dist/eui_theme_light.css';

import {EuiProvider} from '@elastic/eui';
import {Provider} from 'react-redux';

import store from '../store';

function MyApp({Component, pageProps}) {
    return (
      <Provider store={store}>
        <EuiProvider colorMode="LIGHT">
          <Component {...pageProps} />
        </EuiProvider>
      </Provider>
    );
}

export default MyApp;
