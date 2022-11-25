import React from "react";
import { useDispatch } from "react-redux";

/* Components */
import CommentType from "../../types/CommentType";
import PostType from "../../types/PostType";
import LikeType from "../../types/LikeType";
import { LikeIcon, DislikeIcon } from "../icons";

/* Styles */
import styles from "./Likes.module.css";

/* redux actions */
import { addLike, removeLike } from "../../features/postSlice";

/* mock hook */
import getUser from "../../hooks/useUser";
import { unknownUser } from "../../db/UsersMock";

export interface LikesProps {
  likedThing: PostType | CommentType;
}

export const Likes: React.FC<LikesProps> = ({ likedThing }) => {
  const likeGoesTo: "post" | "comment" = [
    "photo",
    "title",
    "content",
    "comments",
  ]
    .map((key) => key in likedThing)
    .every((value) => value === true)
    ? "post"
    : "comment";

  const { likes, id: commentId }: { likes: LikeType; id: string } = likedThing;

  const postId =
    likeGoesTo === "post"
      ? (likedThing as PostType).id
      : (likedThing as CommentType).postId;

  const dispatch = useDispatch();
  const user = getUser() || unknownUser;

  const handleLike = (e: any, likeType: string) => {
    e.preventDefault();

    if (likes[likeType as keyof LikeType].includes(user.id)) {
      dispatch(
        removeLike({ postId, commentId, likeGoesTo, likeType, userId: user.id })
      );
    } else {
      dispatch(
        addLike({ postId, commentId, likeGoesTo, likeType, userId: user.id })
      );
    }
  };

  const likeCount = likes?.like?.length;
  const dislikeCount = likes?.dislike?.length;

  return (
    <div className={styles.likes}>
      <div className={styles.likesContainer}>
        <div
          className={styles.like}
          onClick={(e) => handleLike(e, "like")}
          data-count={likeCount}
        >
          <LikeIcon
            color={likeCount === 0 ? "lightgrey" : "#3333ffaa"}
            size="2x"
          />
        </div>
        <div
          className={styles.like}
          onClick={(e) => handleLike(e, "dislike")}
          data-count={dislikeCount}
        >
          <DislikeIcon
            color={dislikeCount === 0 ? "lightgrey" : "#ff3333aa"}
            size="2x"
          />
        </div>
      </div>
    </div>
  );
};

export default Likes;
