import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { store } from '../redux/store';
import { Toaster } from 'react-hot-toast';

// @ts-ignore
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <Toaster
          position='bottom-right'
          reverseOrder={false}
        />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
