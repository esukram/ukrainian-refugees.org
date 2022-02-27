import { useRouter } from "next/router";
import { GetStaticProps, NextComponentType } from "next";

import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header: NextComponentType = (props) => {
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
