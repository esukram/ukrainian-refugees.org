import { NextPage } from "next";

import Footer from "./Footer";
import Header from "./Header";

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 flex-1 w-full flex flex-col items-center justify-start">
        {children}
      </main>
      <Footer />
    </>
  );
};
