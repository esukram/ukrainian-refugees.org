import { useRouter } from "next/router";
import Link from "next/link";

import type LocaleProps from "../locales";

import styles from "../styles/Header.module.css";

const Header = ({ locale: localeProps }: LocaleProps) => {
  const { locales = [], locale: activeLocale, ...router } = useRouter();

  return (
    <header className={styles.header}>
      <h1>{localeProps.head.title}</h1>
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

export default Header;
