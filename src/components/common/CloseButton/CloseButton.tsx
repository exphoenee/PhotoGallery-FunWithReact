import React from "react";

import { Close } from "../../icons";

import styles from "./CloseButton.module.css";

export interface CloseButtonProps {
  action: any;
}

const CloseButton: React.FC<CloseButtonProps> = ({ action }) => {
  return (
    <button className={styles.close} onClick={action}>
      <Close />
    </button>
  );
};

export default CloseButton;
