import { useRouter } from "next/router";
import { GetStaticProps, NextComponentType, NextPage } from "next";

import styles from "../styles/Footer.module.css";

const Footer: NextPage = (props) => {
  const { locales = [], locale: activeLocale, ...router } = useRouter();

  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          {props.locale.footer.bugs_start}
          <a href="https://github.com/esukram/ukrainian-refugees.org/issues">
            GitHub issue
          </a>
          {props.locale.footer.bugs_end}
        </li>
        <li>
          {props.locale.footer.ideas_start}
          <a href="https://github.com/esukram/ukrainian-refugees.org/discussions">
            GitHub Discussion
          </a>
          {props.locale.footer.ideas_end}
        </li>
      </ul>
    </footer>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: require(`../locales/${locale}.json`),
    },
  };
};

export default Footer;
