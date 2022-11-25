import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

/* componenets */
import Button from "../common/Button/Button";

/* redux actions */
import { addComment, updateComment } from "../../features/postSlice";

/* mock hooks */
import getUser from "../../hooks/useUser";

/* styles */
import styles from "./CommentEditor.module.css";

/* Helpers */
import getCurrentDate from "../../helpers/getCurrentDate";

/* interfaces */
import CommentType from "../../types/CommentType";

export interface CommentEditorProps {
  comment: CommentType;
  ActionOnSubmit?: () => void;
}

const CommentEditor: React.FC<CommentEditorProps> = ({
  comment,
  ActionOnSubmit,
}) => {
  const [newComment, setNewComment] = useState<string>(comment.comment ?? "");

  const create = comment.id === "newComment";

  const dispatch = useDispatch();

  const handleAddComment = (e: any, comment: CommentType) => {
    e.preventDefault();
    if (e.target.comment.value.length > 0) {
      const thisComment = {
        postId: comment.postId,
        id: create ? uuidv4() : comment?.id ?? uuidv4(),
        comment: e.target.comment.value,
        createdAt: comment?.createdAt ?? getCurrentDate(),
        changed: !create,
        owner: comment?.owner ?? getUser(),
      };

      dispatch(create ? addComment(thisComment) : updateComment(thisComment));
      console.log(e.target.comment.value);
      ActionOnSubmit && ActionOnSubmit();
      setNewComment("");
    }
  };

  return (
    <form
      className={styles.addComment}
      onSubmit={(e) => handleAddComment(e, comment)}
    >
      <textarea
        name="comment"
        id="comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        rows={3}
        placeholder="Comment here..."
      />
      <Button type="submit">{create ? "Add comment" : "Save changes"}</Button>
    </form>
  );
};

export default CommentEditor;
