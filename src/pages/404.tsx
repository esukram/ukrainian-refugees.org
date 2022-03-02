import Error from "next/error";
import { GetStaticProps } from "next";

import type LocaleProps from "../locales";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: require(`../locales/${locale}.json`),
    },
  };
};

const Custom404 = ({ locale: localeProps }: LocaleProps) => {
  return <Error statusCode={404} title={localeProps.error[404]} />;
};

export default Custom404;
