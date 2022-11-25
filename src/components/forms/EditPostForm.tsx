import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

/* Components */
import ImageSelectModal from "../modals/ImageSelecModal";
import Button from "../common/Button/Button";
import ImageFrame from "./../photos/ImageFrame";
import FormGenerator from "./subComponents/FormGenerator";
import { PostIcon } from "../icons";

/* Mock hooks */
import getUser from "../../hooks/useUser";

/* Helpers */
import getCurrentDate from "../../helpers/getCurrentDate";

/* redux actions */
import { createPost, updatePost } from "../../features/postSlice";

/* interfaces */
import PostType from "../../types/PostType";
import PhotoType from "../../types/PhotoType";

/* Mock data */
import { unknownUser } from "../../db/UsersMock";
import { placeholerImage } from "../../db/PhotosMock";

/* Styles */
import styles from "./EditPostForm.module.css";

/* Constants */
import editPostFormFields from "./formStructures/editPostFormFields";

interface EditPostFormProps {
  post: PostType;
  moreOnSubmit: () => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ post, moreOnSubmit }) => {
  const [formData, setFormData] = useState<any>();

  const [photo, setPhoto] = useState<PhotoType>(post?.photo || placeholerImage);
  const [isImageSelectOpen, setIsImageSelectOpen] = useState<boolean>(false);

  const photos = useSelector((state: any) => state.photos.value);

  const newPost = "newPost";
  const create = post.id === newPost;

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: PostType = {
      title: formData.title,
      content: formData.content,
      photo: formData?.photo || placeholerImage,
      owner: getUser() || unknownUser,
      id: create ? uuidv4() : post?.id,
      comments: [],
      createdAt: getCurrentDate(),
      likes: post.likes,
    };

    dispatch(create ? createPost(newPost) : updatePost(newPost));
    moreOnSubmit();
  };

  return (
    <>
      <FormGenerator
        handleSubmit={handleSubmit}
        formFields={editPostFormFields}
        submitButtonLabel={create ? "Create post" : "Update post"}
        submitButtonIcon={<PostIcon />}
        submitButtonStyle={styles.submitBtn}
        setFormData={setFormData}
        afterFormFields={
          // it would be a custom inputfield component
          <>
            <Button
              className={styles.imageSelectBtn}
              onClick={() => setIsImageSelectOpen(true)}
            >
              Select post image
            </Button>
            <ImageFrame photo={photo} size="xl" />
          </>
        }
      />
      <ImageSelectModal
        photos={photos}
        isOpen={isImageSelectOpen}
        setIsOpen={setIsImageSelectOpen}
        onImageSelect={setPhoto}
      />
    </>
  );
};

export default EditPostForm;
