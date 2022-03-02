import i18n from "i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

let jsRumAgent: string;
if (process.env.NODE_ENV === "production") {
  jsRumAgent = "/js-rum-prod.js";
} else {
  jsRumAgent = "/js-rum-dev.js";
}

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

      <Script src={jsRumAgent} strategy="beforeInteractive" />
    </>
  );
}

export default MyApp;
