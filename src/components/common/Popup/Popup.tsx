import React, { useEffect } from "react";

import CloseButton from "../CloseButton";

/* Styles */
import styles from "./Popup.module.css";

export interface PopupProps {
  error: string | null | undefined;
  setError: (error: string | null | undefined) => void;
  errorTimeout?: number;
  hasCloseButton?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  error = false,
  setError,
  errorTimeout,
  hasCloseButton = true,
}) => {
  errorTimeout &&
    useEffect(() => {
      const interval = setInterval(() => {
        setError("");
      }, errorTimeout);

      return () => clearInterval(interval);
    }, []);

  return error ? (
    <div className={styles.errorContainer}>
      <p className={styles.error}>{error}</p>
      {hasCloseButton && <CloseButton action={() => setError("")} />}
    </div>
  ) : (
    <></>
  );
};

export default Popup;
