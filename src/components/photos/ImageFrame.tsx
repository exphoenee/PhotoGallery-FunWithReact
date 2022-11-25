import React from "react";

/* interface */
import PhotoType from "./../../types/PhotoType";

/* styles */
import styles from "./ImageFrame.module.css";

interface ImageFrameProps {
  photo: PhotoType;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  handleImageClick?: (e: any, photo: PhotoType) => void;
}

const ImageFrame: React.FC<ImageFrameProps> = ({
  photo,
  handleImageClick,
  size = "md",
}) => {
  return (
    <div className={styles[size]}>
      <img
        src={photo.url}
        alt={photo.title}
        draggable="false"
        onClick={(e) => {
          handleImageClick && handleImageClick(e, photo);
        }}
        className={styles.image}
      />
      <div className={styles.info}>
        <h2>{photo.title}</h2>
        <h3>{photo.author}</h3>
      </div>
    </div>
  );
};

export default ImageFrame;
