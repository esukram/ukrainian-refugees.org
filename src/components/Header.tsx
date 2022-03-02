import i18n from "i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = () => {
  const { locales = [], locale: activeLocale, ...router } = useRouter();

  return (
    <header className={styles.header}>
      <h1 className="underline underline-offset-8">{i18n.t("Header.title")}</h1>
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
