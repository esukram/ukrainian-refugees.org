import i18n from "i18next";

const Footer = () => (
  <footer className="bg-white flex flex-col justify-center">
    <ul className="flex justify-between m-4">
      <li className="ml-4 list-none">
        {i18n.t("Footer.bugs_start")}
        <a href="https://github.com/esukram/ukrainian-refugees.org/issues">GitHub issue</a>
        {i18n.t("Footer.bugs_end")}
      </li>

      <li className="ml-4 list-none">
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
