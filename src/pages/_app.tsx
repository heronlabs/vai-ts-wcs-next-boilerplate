import '../application/styles/globals.css';

import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import {store} from '../infrastructure/redux/store';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
