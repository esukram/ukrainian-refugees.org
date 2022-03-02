import i18n from "i18next";
import Head from "next/head";
import Script from "next/script";
import { Layout } from "../components/Layout";

import type { AppProps } from "next/app";

import "../styles/globals.css";

const jsAgent =
  process.env.APP_ENV === "production"
    ? "https://js-cdn.dynatracelabs.com/jstag/14868fa4215/bf92769fcy/f73d490c2124cf37_complete.js"
    : "https://js-cdn.dynatracelabs.com/jstag/14868fa4215/bf68100yjs/5e1bbf45c5a79b50_complete.js";

function MyApp({ Component, pageProps, router }: AppProps) {
  const locale = router.locale ?? router.defaultLocale ?? "en";

  i18n.init({
    lng: locale,
    resources: {
      [locale]: { translation: require(`../locales/${locale}.json`) },
    },
  });

  return (
    <>
      <Head>
        <title>{i18n.t("Header.title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />;
      </Layout>

      <Script
        src={jsAgent}
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default MyApp;
