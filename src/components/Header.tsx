import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styles from "../styles/Header.module.css";

const Header = () => {
  const { t } = useTranslation();
  const { locales = [], locale: activeLocale, ...router } = useRouter();
  const { pathname, query, asPath } = router;

  return (
    <header className={`${styles.header} bg-white`}>
      <h1 className="underline underline-offset-8">{t("Header.title")}</h1>
      <ul className={styles.lang_switcher}>
        {locales.map(locale => {
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
