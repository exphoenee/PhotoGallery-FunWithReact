import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

/* Components */
import ImageGrid from "../components/photos/ImageGrid";
import FloatingButton from "../components/common/FloatingButton";
import ImageSelectModal from "../components/modals/ImageSelecModal";

/* redux actions */
import { addPhoto } from "../features/photoSlice";

/* styles */
import styles from "./Gallery.module.css";

/* helpers */
import getNewIamges from "../helpers/getRandomImages";

/* types */
import PhotoType from "./../types/PhotoType";
import { AddIcon } from "./../components/icons/index";
// import getCurrentDate from "../helpers/getCurrentDate";

const Gallery: React.FC = () => {
  const [isImageSelectOpen, setIsImageSelectOpen] = useState<boolean>(false);
  const [newImages, setNewImages] = useState<PhotoType[]>(getNewIamges(12));

  const photos: PhotoType[] = useSelector((state: any) => state.photos.value);

  const dispatch = useDispatch();

  const handleAddPhoto = (photo: PhotoType) => {
    dispatch(addPhoto(photo));
    setIsImageSelectOpen(false);
  };

  // const handleGetNewImages = async () => {
  //   const picsum = await axios.get("https://picsum.photos/v2/list?limit=12");
  //   const newImages = picsum.data;

  //   const myImages = newImages.map((image: any) => {
  //     return {
  //       id: uuidv4(),
  //       url: image.download_url,
  //       title: image.author,
  //       author: image.author,
  //       createdAt: getCurrentDate(),
  //     };
  //   });
  //   setNewImages(myImages);
  // };

  // useEffect(() => {
  //   handleGetNewImages();
  // }, []);

  return (
    <>
      <div className={styles.container}>
        <FloatingButton
          icon={<AddIcon />}
          label="Add photo"
          onClick={() => setIsImageSelectOpen(true)}
        />
        <ImageGrid photoList={photos} />
      </div>
      <ImageSelectModal
        photos={newImages}
        isOpen={isImageSelectOpen}
        setIsOpen={setIsImageSelectOpen}
        onImageSelect={handleAddPhoto}
      />
    </>
  );
};

export default Gallery;
