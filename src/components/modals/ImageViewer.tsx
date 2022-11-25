import { title } from "process";
import React from "react";

/* Components */
import { ArrowLeft, ArrowRight, Close } from "../icons";

/* interfaces */
import PhotoType from "../../types/PhotoType";

/* styles */
import styles from "./ImageViewer.module.css";

export interface ImageViewerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  hasCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  photo: PhotoType | null;
  onClose?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const ImageViewer = ({
  isOpen,
  setIsOpen,
  hasCloseButton = true,
  closeOnOverlayClick = true,
  photo,
  onClose,
  onNext,
  onPrev,
}: ImageViewerProps) => {
  return isOpen ? (
    <div
      className={styles.selected}
      onClick={() => {
        if (closeOnOverlayClick) {
          onClose && onClose();
          setIsOpen(false);
        }
      }}
    >
      <div className={styles.selectedImageWrapper}>
        <img
          src={photo?.url}
          alt={title}
          draggable="false"
          className={styles.selectedImage}
        />
        {onNext && (
          <button
            className={styles.iconButton}
            style={{ right: "1%", top: "50%" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onNext();
            }}
          >
            <ArrowRight size={"2x"} />
          </button>
        )}
        {onPrev && (
          <button
            className={styles.iconButton}
            style={{ left: "1%", top: "50%" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onPrev();
            }}
          >
            <ArrowLeft size={"2x"} />
          </button>
        )}
        {hasCloseButton && (
          <button
            className={styles.iconButton}
            style={{ right: "1%", top: "10%" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose && onClose();
              setIsOpen(false);
            }}
          >
            <Close size={"2x"} />
          </button>
        )}
      </div>

      {photo && (photo.title || photo.author) && (
        <div className={styles.infoSelected}>
          {photo.title && <h2>{photo.title}</h2>}
          {photo.author && <h3>{photo.author}</h3>}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default ImageViewer;
