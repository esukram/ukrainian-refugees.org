import { NextPage } from "next";

import Footer from "./Footer";
import Header from "./Header";

import styles from "../styles/Layout.module.css";

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
