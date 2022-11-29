import React from "react";
import { Outlet } from "react-router-dom";

/* components */
import Header from "../components/common/Header";
import Footer from "../components/common/Footer/Footer";

/* styles */
import styles from "./PageWithHeader.module.css";

const PageWithHeader: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.scrollable}>
          <div className={styles.content}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default PageWithHeader;
