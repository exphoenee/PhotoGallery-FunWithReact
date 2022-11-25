import React, { useState } from "react";

/* Components */
import ImageViewer from "../../components/modals/ImageViewer";

/* styles */
import styles from "./ImageGrid.module.css";

/* types */
import PhotoType from "../../types/PhotoType";
import ImageFrame from "./ImageFrame";

interface ImageGridProps {
  photoList: PhotoType[];
  hasViewer?: boolean;
  onImageSelect?: (photo: PhotoType) => void;
}

const Gallery: React.FC<ImageGridProps> = ({
  photoList,
  onImageSelect,
  hasViewer = true,
}) => {
  const [selected, setSelected] = useState<any>(null);

  const handleNext = () => {
    const currentPhotoIndex = photoList.findIndex(
      (photo) => photo?.id === selected?.id
    );
    const nextPhotoIndex =
      currentPhotoIndex + 1 > photoList?.length - 1 ? 0 : currentPhotoIndex + 1;
    console.log(nextPhotoIndex);
    setSelected(photoList[nextPhotoIndex]);
  };

  const handlePrev = () => {
    const currentPhotoIndex = photoList?.findIndex(
      (photo) => photo?.id === selected?.id
    );
    const prevPhotoIndex =
      currentPhotoIndex - 1 < 0 ? photoList?.length - 1 : currentPhotoIndex - 1;
    console.log(prevPhotoIndex);
    setSelected(photoList[prevPhotoIndex]);
  };

  return (
    <>
      {photoList && photoList.length > 0 ? (
        <ul className={styles.imageGallery}>
          {photoList.map((photo) => {
            return (
              <li key={photo.id}>
                <ImageFrame
                  photo={photo}
                  handleImageClick={() => {
                    onImageSelect
                      ? onImageSelect(photo)
                      : setSelected && setSelected(photo);
                  }}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No photos found</p>
      )}
      {hasViewer && (
        <ImageViewer
          photo={selected}
          isOpen={!!selected}
          setIsOpen={setSelected}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default Gallery;
