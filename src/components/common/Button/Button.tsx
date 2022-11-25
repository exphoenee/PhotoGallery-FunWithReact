import React from "react";

/* styles */
import styles from "./Button.module.css";

export interface ButtonProps {
  children?: JSX.Element | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  label?: string;
  circular?: boolean;
  noBackground?: boolean;
  icon?: JSX.Element;
  className?: string;
  iconRight?: boolean;
  tabIndex?: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  tabIndex,
  onClick,
  type = "button",
  icon,
  label,
  circular = false,
  noBackground = false,
  iconRight = false,
  disabled = false,
  className,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (type !== "submit") {
      e.preventDefault();
      e.stopPropagation();
    }
    onClick && onClick(e);
  };

  return (
    <button
      className={[
        className,
        circular ? styles.circular : styles.button,
        noBackground ? styles.noBackground : styles.background,
      ].join(" ")}
      tabIndex={tabIndex}
      onClick={(e) => handleClick(e)}
      type={type}
      disabled={disabled}
    >
      {icon && !iconRight && (
        <span style={{ marginRight: !circular ? "0.5rem" : "0" }}>{icon}</span>
      )}
      {children && !circular && children}
      {label && !circular && label}
      {icon && iconRight && (
        <span style={{ marginLeft: "0.5rem" }}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
