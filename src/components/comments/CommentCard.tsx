import React, { useState } from "react";
import { useDispatch } from "react-redux";

/* Components */
import CommentEditor from "./CommentEditor";
import CRUDButtonRow from "../common/CRUDButtonRow";
import Likes from "../likes/Likes";

/* redux actions */
import { removeComment } from "../../features/postSlice";

/* mock hooks */
import getUser from "../../hooks/useUser";

/* styles */
import styles from "./CommentCard.module.css";

/* interfaces */
import CommentType from "../../types/CommentType";

/* helpers */
import convertDateToRender from "../../helpers/convertDateToRender";

export interface CommentCardProps {
  comment?: CommentType | null;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const user = getUser();

  const dispatch = useDispatch();

  const [edit, setEdit] = useState<boolean>(false);

  if (comment) {
    if (!edit) {
      return (
        <div className={styles.commentCard}>
          <div className={styles.innerContainer}>
            <p>Commented by: {comment.owner.username}</p>
            <p>{comment.comment}</p>
            <div className={styles.commentFooter}>
              <Likes likedThing={comment} />
              <div className={styles.commentInfo}>
                <p className={styles.commentDate}>
                  {convertDateToRender(comment.createdAt)}
                  {comment.changed ? " (edited)" : ""}
                </p>
              </div>
            </div>
            {user && comment.owner.id === user?.id && (
              <CRUDButtonRow
                position="topRight"
                onEdit={() => setEdit(!edit)}
                onDelete={() => dispatch(removeComment(comment))}
              />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <CommentEditor
          comment={comment}
          ActionOnSubmit={() => setEdit(false)}
        />
      );
    }
  } else {
    return <p>Under Contruction!</p>;
  }
};

export default CommentCard;
