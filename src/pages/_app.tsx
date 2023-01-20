import '../application/styles/global.css';

import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import Layout from '../application/layout';
import {store} from '../infrastructure/redux/store';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
