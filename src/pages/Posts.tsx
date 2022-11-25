import React, { useState } from "react";
import { useSelector } from "react-redux";

/* components */
import FloatingButton from "../components/common/FloatingButton";
import PostEditModal from "./../components/modals/PostEditModal";
import { AddIcon } from "../components/icons";
import PostGrid from "../components/post/PostGrid";

/* types */
import PostType from "./../types/PostType";

/* styles */
import styles from "./Posts.module.css";

/* Helpers */
import sortBy from "../helpers/sortBy";

const Posts: React.FC = () => {
  const posts: PostType[] = useSelector((state: any) => state.posts.value);
  const [addPost, setAddPost] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <FloatingButton
        icon={<AddIcon />}
        label="Add post"
        onClick={() => setAddPost(true)}
      />
      <PostGrid postList={sortBy(posts, (post) => post.createdAt, "desc")} />
      <PostEditModal isOpen={addPost} setIsOpen={setAddPost} />
    </div>
  );
};

export default Posts;
