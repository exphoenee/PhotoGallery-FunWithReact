import React from "react";

import styles from "./FloatingButton.module.css";

export interface FloatingButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  icon,
  label,
}) => {
  return (
    <button className={styles.floatingButton} onClick={onClick}>
      {icon}
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};

export default FloatingButton;
