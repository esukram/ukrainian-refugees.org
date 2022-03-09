import i18n from "i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { initReactI18next, useTranslation } from "react-i18next";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

const jsAgent =
  process.env.APP_ENV === "production"
    ? "https://js-cdn.dynatracelabs.com/jstag/14868fa4215/bf92769fcy/f73d490c2124cf37_complete.js"
    : "https://js-cdn.dynatracelabs.com/jstag/14868fa4215/bf68100yjs/5e1bbf45c5a79b50_complete.js";

function MyApp({ Component, pageProps, router }: AppProps) {
  const locale = router.locale ?? router.defaultLocale ?? "en";
  const { t } = useTranslation();

  i18n.use(initReactI18next).init({
    lng: locale,
    resources: {
      [locale]: { translation: require(`../locales/${locale}.json`) },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      bindI18n: "",
    },
  });

  return (
    <>
      <Head>
        <title>{t("Header.title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Script src={jsAgent} strategy="beforeInteractive" crossOrigin="anonymous" />
    </>
  );
}

export default MyApp;
