import React from "react";

/* Components */
import Modal from "./Modal";
import ImageGrid from "../photos/ImageGrid";

/* Interfaces */
import PhotoType from "./../../types/PhotoType";

interface ImageSelectModalProps {
  isOpen: boolean;
  photos: PhotoType[];
  setIsOpen: (value: boolean) => void;
  onClose?: () => void;
  onImageSelect: (photo: PhotoType) => void;
}

const ImageSelectModal: React.FC<ImageSelectModalProps> = ({
  isOpen,
  setIsOpen,
  onClose,
  photos,
  onImageSelect,
}) => {
  const handleSelect = (photo: PhotoType) => {
    onImageSelect(photo);
    setIsOpen(false);
  };

  return (
    <Modal
      title="Select image"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      width="xl"
    >
      <ImageGrid photoList={photos} onImageSelect={handleSelect} />
    </Modal>
  );
};

export default ImageSelectModal;
