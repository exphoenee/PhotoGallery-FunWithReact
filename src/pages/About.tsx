import React from "react";
import { Link } from "react-router-dom";

/* styles */
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A libero
        fugiat quas exercitationem beatae ullam placeat temporibus odio repellat
        fugit minus blanditiis eaque eum, vitae quia, in molestias. Cupiditate
        officia, eligendi porro saepe neque sit quas? Repellendus laboriosam
        nisi quae est! Cumque unde dignissimos quae itaque molestias amet
        quaerat veniam excepturi atque rem laborum sapiente perferendis
        repellat, ipsam deleniti repellendus, ullam omnis facere illum
        voluptates quod deserunt ex labore dolores! Doloribus maiores nam
        dignissimos id voluptatum repellat illum porro reprehenderit ipsam? Quas
        maxime nulla odio, consectetur autem possimus, et blanditiis qui dolor
        facere tenetur, impedit ratione tempore soluta corporis consequatur
        expedita nisi quod pariatur? Ea ad harum veritatis voluptatem libero.
        Veniam inventore qui error quas voluptas eligendi nulla, neque earum
        vero reprehenderit architecto optio fuga ratione tempore delectus
        doloremque sed eum mollitia magnam doloribus esse minima nostrum? Cumque
        aut tempora blanditiis commodi fugit excepturi quidem nisi ut, vel quod
        magni?
      </p>
      <Link to="/" className={styles.back}>
        Back to home
      </Link>
    </div>
  );
};

export default About;
