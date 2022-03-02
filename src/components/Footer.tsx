import type LocaleProps from "../locales";

import styles from "../styles/Footer.module.css";

const Footer = ({ locale: localeProps }: LocaleProps) => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          {localeProps.footer.bugs_start}
          <a href="https://github.com/esukram/ukrainian-refugees.org/issues">
            GitHub issue
          </a>
          {localeProps.footer.bugs_end}
        </li>
        <li>
          {localeProps.footer.ideas_start}
          <a href="https://github.com/esukram/ukrainian-refugees.org/discussions">
            GitHub Discussion
          </a>
          {localeProps.footer.ideas_end}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
