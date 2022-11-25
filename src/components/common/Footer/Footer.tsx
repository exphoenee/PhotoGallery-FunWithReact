import React from "react";

/* styles */
import styles from "./Footer.module.css";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Bozzay Viktor</p>
        <p>Copyright 2022</p>
      </div>
      <div className={styles.socials}>
        <p>Links</p>
        <a
          href="https://www.linkedin.com/in/viktorbozzay"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://profile.codersrank.io/user/exphoenee/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Coders Rank
        </a>
        <a
          href="https://github.com/exphoenee"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.bozzayviktor.hu"
          rel="noopener noreferrer"
          target="_blank"
        >
          Online Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
