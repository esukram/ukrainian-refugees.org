import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const styles = {
  nav: "no-underline rounded py-1 px-2 font-bold bg-gray-200 h-8",
  active: "underline bg-sky-500 text-white",
};

const Header = () => {
  const { t } = useTranslation();
  const { locales = [], locale: activeLocale, ...router } = useRouter();
  const { pathname, query, asPath } = router;

  const navigation = [
    ["/", t("Home.nav.home")],
    ["/register/refugee", t("Home.nav.refugee")],
    ["/register/housing", t("Home.nav.housing")],
  ];

  return (
    <header className="bg-white grid items-center grid-cols-1 lg:grid-cols-3 px-4 whitespace-nowrap gap-2 py-2">
      <h1 className="text-center lg:text-left h-8">{t("Header.title")}</h1>

      <nav className="flex gap-4 justify-self-center">
        {navigation.map(([href, text]) => (
          <Link key={href} href={href}>
            <a className={`${styles.nav} ${href === pathname ? styles.active : ""}`}>{text}</a>
          </Link>
        ))}
      </nav>

      <ul className="flex gap-4 justify-self-center lg:justify-self-end">
        {locales.map(locale => {
          return (
            <li key={locale}>
              {locale === activeLocale ? (
                <span className={`${styles.nav} ${styles.active}`}>{locale}</span>
              ) : (
                <Link href={{ pathname, query }} locale={locale}>
                  <a className={styles.nav}>{locale}</a>
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
