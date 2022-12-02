import React from "react";
import { Link, useLocation } from "react-router-dom";

/* Components */
import NavBar from "../NavBar";
import siteMap from "../../../routes/siteMap";

/* styles */
import styles from "./Header.module.css";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();

  const linkProps = siteMap.find((item) => item.path === location.pathname);

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.title} to="/">
          <h1>
            <span className={styles.headerIcon}>{linkProps?.icon}</span>
            {linkProps?.title}
          </h1>
        </Link>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
