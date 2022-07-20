import '../styles/globals.css';
import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store, { wrapper } from '@stores/app';
import Head from 'next/head';
import favicon from '@images/favicon.ico';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </Head>
      <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
