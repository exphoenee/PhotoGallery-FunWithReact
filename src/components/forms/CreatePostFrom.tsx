import React from "react";

import EditPostForm from "./EditPostForm";

import PostType from "../../types/PostType";
import { placeholerImage } from "../../db/PhotosMock";
import { unknownUser } from "../../db/UsersMock";
import getCurrentDate from "../../helpers/getCurrentDate";
import getUser from "../../hooks/useUser";

interface CreatePostFormProps {
  moreOnSubmit: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ moreOnSubmit }) => {
  const newPost: PostType = {
    title: "",
    content: "",
    photo: placeholerImage,
    owner: getUser() || unknownUser,
    id: "newPost",
    comments: [],
    createdAt: getCurrentDate(),
    likes: { like: [], dislike: [] },
  };

  return <EditPostForm post={newPost} moreOnSubmit={moreOnSubmit} />;
};

export default CreatePostForm;
