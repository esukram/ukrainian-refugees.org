import i18n from "i18next";
import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <ul>
      <li>
        {i18n.t("Footer.bugs_start")}
        <a href="https://github.com/esukram/ukrainian-refugees.org/issues">
          GitHub issue
        </a>
        {i18n.t("Footer.bugs_end")}
      </li>
      <li>
        {i18n.t("Footer.ideas_start")}
        <a href="https://github.com/esukram/ukrainian-refugees.org/discussions">
          GitHub Discussion
        </a>
        {i18n.t("Footer.ideas_end")}
      </li>
    </ul>
  </footer>
);

export default Footer;
