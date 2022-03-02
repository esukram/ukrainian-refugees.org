import { GetStaticProps } from "next";
import Script from "next/script";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

import type { AppProps as NextAppProps } from "next/app";
import type LocaleProps from "../locales";

import "../styles/globals.css";

// modified version - allows for custom pageProps type, falling back to 'any'
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

const jsAgent =
  process.env.APP_ENV === "production"
    ? "https://js-cdn.dynatracelabs.com/jstag/14868fa4215/bf92769fcy/f73d490c2124cf37_complete.js"
    : "https://js-cdn.dynatracelabs.com/jstag/14868fa4215/bf68100yjs/5e1bbf45c5a79b50_complete.js";

function MyApp({ Component, pageProps }: AppProps<LocaleProps>) {
  return (
    <>
      <Script
        src={jsAgent}
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer {...pageProps} />
    </>
  );
}

export const getInitialProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: require(`../locales/${locale}.json`),
    },
  };
};

export default MyApp;
