import React, { useState } from "react";

/* Components */
import CommentCard from "./CommentCard";
import { MoreIcon, LessIcon } from "../icons";

/* styles */
import styles from "./Comments.module.css";

/* interfaces */
import CommentType from "../../types/CommentType";

export interface CommentsProps {
  comments?: CommentType[];
  limit?: number;
}

const Comments: React.FC<CommentsProps> = ({ comments = [], limit = 3 }) => {
  const [commentLimit, setCommentLimit] = useState<number>(limit);

  return (
    <div className="comments">
      {comments?.length > 0 && <h2>Comments</h2>}
      {comments?.slice(0, commentLimit)?.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />;
      })}
      {comments?.length > limit && (
        <div className={styles.buttonContainer}>
          <button
            disabled={commentLimit >= comments.length}
            className={styles.showMore}
            onClick={() => setCommentLimit(commentLimit + limit)}
          >
            <MoreIcon />
          </button>
          <button
            disabled={commentLimit - limit <= 1}
            className={styles.showLess}
            onClick={() => setCommentLimit(commentLimit - limit)}
          >
            <LessIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Comments;
