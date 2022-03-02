import { NextPage } from "next";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
