import React from "react";

/* components */
import CommentEditor from "./CommentEditor";

/* interfaces */
import CommentType from "../../types/CommentType";

/* mock hooks */
import getUser from "../../hooks/useUser";

/* Helpers */
import getCurrentDate from "../../helpers/getCurrentDate";

/* Mock data */
import { unknownUser } from "./../../db/UsersMock";

export interface CommentCreatorProps {
  postId: string;
}

const CommentCreator: React.FC<CommentCreatorProps> = ({ postId }) => {
  const createDefaultComment = (): CommentType => {
    return {
      id: "newComment",
      postId,
      comment: "",
      createdAt: getCurrentDate(),
      owner: getUser() ?? unknownUser,
      likes: {
        like: [],
        dislike: [],
      },
    };
  };

  return <CommentEditor comment={{ ...createDefaultComment(), postId }} />;
};

export default CommentCreator;
