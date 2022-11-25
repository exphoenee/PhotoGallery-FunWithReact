import React, { useState, useEffect } from "react";

import CloseButton from "../common/CloseButton";

import styles from "./Modal.module.css";

export interface ModalProps {
  children: React.ReactNode;
  title: string;
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  closeOnOverlayClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  width = "xs",
  footer,
  onClose,
  isOpen,
  setIsOpen,
  closeOnOverlayClick = true,
}) => {
  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
  }, []);

  const handleModalClose = () => {
    document.body.style.overflow = "unset";
    onClose && onClose();
    setIsOpen(false);
  };

  return isOpen ? (
    <>
      <div
        className={styles.cover}
        onClick={() => closeOnOverlayClick && setIsOpen(false)}
      />
      <div className={styles[width]}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <CloseButton action={handleModalClose} />
        </div>
        <hr />
        <div className={styles.body}>{children}</div>
        {footer && (
          <>
            <hr />
            <div className={styles.footer}>{footer}</div>
          </>
        )}
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
