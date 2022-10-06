import React from 'react';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
  <StateContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  );
}

export default MyApp;
