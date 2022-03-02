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

const Custom500 = ({ locale: localeProps }: LocaleProps) => {
  return <Error statusCode={500} title={localeProps.error[500]} />;
};

export default Custom500;
