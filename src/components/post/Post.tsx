import React, { useState } from "react";
import { useDispatch } from "react-redux";

/* Components */
import CRUDButtonRow from "../common/CRUDButtonRow";
import PostEditModal from "../modals/PostEditModal";
import ImageFrame from "./../photos/ImageFrame";
import Likes from "../likes/Likes";

/* redux actions */
import { removePost } from "../../features/postSlice";

/* mock hooks */
import getUser from "../../hooks/useUser";

/* styles */
import styles from "./Post.module.css";

/* types */
import PostType from "../../types/PostType";
import PhotoType from "../../types/PhotoType";

/* Helpers */
import convertDateToRender from "../../helpers/convertDateToRender";
import Avatar from "../common/Avatar/Avatar";

interface PostProps {
  post: PostType;
  handleImageClick: (e: any, photo: PhotoType) => void;
}

const Post: React.FC<PostProps> = ({ post, handleImageClick }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const user = getUser();

  const dispatch = useDispatch();

  return (
    <section className={styles.postSection}>
      <h2 className={styles.title}>{post.title}</h2>
      <ImageFrame
        photo={post.photo}
        handleImageClick={handleImageClick}
        size="xxl"
      />
      {user && post.owner.id === user?.id && (
        <CRUDButtonRow
          position="topRight"
          onDelete={() => dispatch(removePost(post))}
          onEdit={() => setEdit(!edit)}
        />
      )}
      <div className={styles.postContainer}>
        <p className={styles.content}>{post.content}</p>
        <div className={styles.infoWrapper}>
          <Likes likedThing={post} />
          <div className={styles.infoContainer}>
            <Avatar user={post.owner} size="xs" />
            <div className={styles.infos}>
              <p className={styles.owner}>Posted by: {post.owner.username}</p>
              <p className={styles.date}>
                {convertDateToRender(post.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
      {edit && <PostEditModal isOpen={edit} setIsOpen={setEdit} post={post} />}
    </section>
  );
};

export default Post;
