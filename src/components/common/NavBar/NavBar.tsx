import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* Components */
import LoginModal from "../../modals/LoginModal";
import RegisterModal from "../../modals/RegisterModal";
import { Hamburger } from "../../icons";
import Button from "../Button/Button";

/* Constants */
import siteMap from "../../../routes/siteMap";

/* styles */
import styles from "./NavBar.module.css";

/* fake hook */
import getUser from "../../../hooks/useUser";
import { userModalProps } from "../../modals/LoginModal";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const user = getUser();
  const location = useLocation();

  interface modalReplace {
    path: string;
    props: userModalProps;
    component: React.FC<userModalProps>;
  }

  const modals: modalReplace[] = [
    {
      path: "/login",
      props: { isOpen: loginOpen, setIsOpen: setLoginOpen },
      component: LoginModal,
    },
    {
      path: "/register",
      props: { isOpen: registerOpen, setIsOpen: setRegisterOpen },
      component: RegisterModal,
    },
  ];

  const handleModal = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    modal: modalReplace
  ) => {
    e.preventDefault();
    modal.props.setIsOpen(true);
  };

  return (
    <nav className={styles.navbar}>
      {user && (
        <Link className={styles.welcome} to="/profile">
          <div className={styles.profileImage}>
            <img src={user?.photo} alt={user?.username} />
          </div>
          <h2>Welcome {user?.firstName}!</h2>
        </Link>
      )}
      <Button
        className={styles.hamburger}
        icon={<Hamburger />}
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      />
      <ul className={hamburgerOpen ? styles.linksOpen : styles.links}>
        {siteMap
          //.filter((item) => item.path !== location.pathname)
          .map((item, index) => {
            const modal = modals.find((modal) => modal.path === item.path);
            if (
              ((!!user && item.showUser) ||
                (!user && item.hideUser) ||
                (user?.role === "admin" && item.adminRequired)) &&
              item.menu
            ) {
              return (
                <li
                  key={index}
                  className={
                    item.path !== location.pathname
                      ? styles.linkContainer
                      : styles.selectedLinkContainer
                  }
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      if (modal) handleModal(e, modal);
                    }}
                    className={styles.link}
                  >
                    <span className={styles.icon}>
                      {item.icon && item.icon}
                    </span>
                    {item.title}
                  </Link>
                </li>
              );
            }
          })}
      </ul>
      {modals.map((modal) => (
        <modal.component {...modal.props} key={modal.path} />
      ))}
    </nav>
  );
};

export default NavBar;
