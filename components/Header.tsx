import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";

import Link from "next/link";

import type LocaleProps from "../locales";

import styles from "../styles/Header.module.css";

const Header: NextPage<LocaleProps> = (props) => {
  const { locales = [], locale: activeLocale, ...router } = useRouter();

  return (
    <header className={styles.header}>
      <h1>{props.locale.head.title}</h1>
      <ul className={styles.lang_switcher}>
        {locales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              {locale === activeLocale && <span>{locale}</span>}
              {locale != activeLocale && (
                <Link href={{ pathname, query }} as={asPath} locale={locale}>
                  <a>{locale}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: require(`../locales/${locale}.json`),
    },
  };
};

export default Header;
