import React, { useState } from "react";

/* components */
import Comments from "../comments/Comments";
import CommentCreator from "../comments/CommentCreator";
import Post from "./Post";
import ImageViewer from "../modals/ImageViewer";

/* mock hooks */
import getUser from "../../hooks/useUser";

/* types */
import PostType from "../../types/PostType";
import PhotoType from "../../types/PhotoType";

/* styles */
import styles from "./PostGrid.module.css";

/* helpers */
import sortBy from "../../helpers/sortBy";
export interface PostGridProps {
  postList: PostType[];
  hasViewer?: boolean;
}

const PostGrid: React.FC<PostGridProps> = ({ postList, hasViewer = true }) => {
  const [selected, setSelected] = useState<PhotoType | null>(null);

  const user = getUser();

  /* TODO: bevinni a handlenNext, hanlePrev-et a ImageViewrbe */
  const handleNext = () => {
    const currentPhotoIndex = postList.findIndex(
      (post) => post?.photo?.id === selected?.id
    );
    const nextPhotoIndex =
      currentPhotoIndex + 1 > postList?.length - 1 ? 0 : currentPhotoIndex + 1;
    console.log(nextPhotoIndex);
    setSelected(postList[nextPhotoIndex]?.photo);
  };

  const handlePrev = () => {
    const currentPhotoIndex = postList?.findIndex(
      (post) => post?.photo?.id === selected?.id
    );
    const prevPhotoIndex =
      currentPhotoIndex - 1 < 0 ? postList?.length - 1 : currentPhotoIndex - 1;
    console.log(prevPhotoIndex);
    setSelected(postList[prevPhotoIndex]?.photo);
  };

  return (
    <>
      <ul className={styles.posts}>
        {postList.map((post, index) => {
          return (
            <li className={styles.postWrapper} key={post.photo.id}>
              <Post
                post={post}
                handleImageClick={(e, photo) => setSelected(photo)}
              />
              {user && <CommentCreator postId={post?.id} />}
              {post.comments && (
                <Comments
                  comments={sortBy(
                    post.comments,
                    (comment) => comment.createdAt,
                    "desc"
                  )}
                  limit={2}
                />
              )}
            </li>
          );
        })}
      </ul>
      {hasViewer && (
        <ImageViewer
          isOpen={!!selected}
          setIsOpen={() => setSelected(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          photo={selected}
        />
      )}
    </>
  );
};

export default PostGrid;
