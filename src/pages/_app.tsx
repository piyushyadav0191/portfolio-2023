import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@/providers/theme';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import type { FC } from '@/types';
import { darkTheme, globalStyles } from '~/stitches';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

NProgress.configure({
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles();

  const router = useRouter();

  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta charSet={'UTF-8'} />
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1.0'}
        />
        <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />
      </Head>
      <NextThemeProvider
        attribute={'class'}
        defaultTheme={'system'}
        value={{
          light: 'light',
          dark: darkTheme.className,
        }}
      >
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </NextThemeProvider>
    </>
  );
};

export default App;
