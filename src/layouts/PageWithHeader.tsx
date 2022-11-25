import React from "react";
import { Outlet } from "react-router-dom";

/* components */
import Header from "../components/common/Header";
import Footer from "../components/common/Footer/Footer";

/* styles */
import styles from "./PageWithHeader.module.css";

const PageWithHeader: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWithHeader;
