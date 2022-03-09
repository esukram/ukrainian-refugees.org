import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white flex flex-col justify-center">
      <ul className="flex justify-between m-4">
        <li className="ml-4 list-none">
          {t("Footer.bugs_start")}
          <a href="https://github.com/esukram/ukrainian-refugees.org/issues">GitHub issue</a>
          {t("Footer.bugs_end")}
        </li>

        <li className="ml-4 list-none">
          {t("Footer.ideas_start")}
          <a href="https://github.com/esukram/ukrainian-refugees.org/discussions">
            GitHub Discussion
          </a>
          {t("Footer.ideas_end")}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
